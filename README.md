🌥️ Cloud Resume Challenge

Welcome to my Cloud Resume Challenge repository! This project is part of the Cloud Resume Challenge, an initiative designed to demonstrate full-stack cloud skills using AWS.

🚀 Overview

This project showcases my resume as a serverless, cloud-native web application hosted on Amazon S3, with a backend powered by AWS Lambda, API Gateway, and DynamoDB. The infrastructure is managed using Infrastructure as Code (IaC), and CI/CD automation is implemented for seamless updates.

🏗️ Architecture
![cloudresume](https://github.com/user-attachments/assets/1b32081b-3f25-4d93-8c42-6a4a4edbc365)


Tech Stack:

Frontend: Static website hosted on Amazon S3 with CloudFront for CDN.

Backend: API powered by AWS Lambda (Python) and API Gateway.

Database: Visitor counter stored in Amazon DynamoDB.

Infrastructure as Code: Terraform / AWS CDK for infrastructure deployment.

CI/CD Pipeline: GitHub Actions for automated deployments.

Domain & SSL: Custom domain with Amazon Route 53 and HTTPS via ACM (AWS Certificate Manager).

🛠️ Setup & Deployment

1️⃣ Prerequisites

AWS Account with necessary IAM permissions

GitHub Actions for CI/CD

Python (for Lambda function)

2️⃣ Clone the Repository

git clone https://github.com/yourusername/cloud-resume-challenge.git
cd cloud-resume-challenge

3️⃣ Deploy Frontend

aws s3 sync frontend/ s3://your-s3-bucket-name --delete

4️⃣ Setup CI/CD

Configure GitHub Actions for automatic deployments.

Add AWS credentials as GitHub Secrets.

Push changes to trigger deployment.

📈 Features

✅ Serverless Architecture (No EC2!)
✅ CloudFront Caching & Performance Optimization
✅ Automated CI/CD Pipeline
✅ Secure & Scalable Design
✅ Custom Domain with HTTPS
✅ DynamoDB-based Visitor Counter

🚧 Upcoming: Infrastructure as Code (IaC) Implementation 🚧
