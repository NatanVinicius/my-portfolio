resource "google_cloud_run_service" "portfolio" {
    name = "portfolio-service"
    location = "us-central1"

    template {
        spec {
            containers {
                image = "us-central1-docker.pkg.dev/my-portfolio-468604/portfolio-repo/my-portfolio:latest"
                ports {
                    container_port = 80
                }
            }
        }
    }
    
    traffic {
        percent = 100
        latest_revision = true
    }
    autogenerate_revision_name = true
}

resource "google_cloud_run_service_iam_member" "public" {
    location = google_cloud_run_service.portfolio.location
    project = "my-portfolio-468604"
    service = google_cloud_run_service.portfolio.name

    role = "roles/run.invoker"
    member = "allUsers"
}