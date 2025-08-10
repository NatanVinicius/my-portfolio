provider "google" {
    credentials = file("${path.module}/keys/my-portfolio-468604-d161826bbdb0.json")
    project = "my-portfolio-468604"
    region = "us-central1"

}