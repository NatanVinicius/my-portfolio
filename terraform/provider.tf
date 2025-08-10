provider "google" {
  credentials = var.credentials_json
  project     = var.project_id
  region      = var.region
}
