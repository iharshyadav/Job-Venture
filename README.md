# Next.js App Setup Guide

This is a Hackathon application configured to use `pnpm` as the package manager. Follow this guide to set up the application, run it using HTTPS for localhost, and manage environment variables.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Set Up HTTPS for Localhost](#set-up-https-for-localhost)
  - [Create Environment Files](#create-environment-files)
  - [Run the Application](#run-the-application)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/) (Install globally using `npm install -g pnpm`)

## Installation

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/iharshyadav/Hackathon-SIH.git
cd Hackathon-SIH
```

### Create Environment Files

Create the `.env` and `.env.local` files in the root directory of your project to manage environment variables:

- **`.env`**: Contains default environment variables.
- **`.env.local`**: Used for environment-specific variables and overrides values in `.env`.

**Example `.env`:**

```env
NEXT_PUBLIC_API_URL=https://api.example.com
