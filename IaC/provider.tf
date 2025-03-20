terraform {
  required_providers {
    aws = {
      version = ">=4.9.0"
      source  = "hashicorp/aws"
    }
  }
}
provider "aws" {
  profile = "default"
  region  = "us-west-1" # Change this to your desired region
}
