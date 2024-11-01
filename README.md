# Vehicle Selection App

## Overview

The Vehicle Selection App is a web application that allows users to select vehicle makes and models based on the year. Users can retrieve detailed information about selected vehicles, including images, fuel types, drive types, and transmission options. This application is built using React, Next.js, and Tailwind CSS.

## Features

- **Vehicle Make Selection:** Users can choose from a list of available vehicle makes.
- **Model Year Selection:** Users can select the model year for the vehicle.
- **Vehicle Details Display:** Once a make and year are selected, the app fetches and displays the vehicle models along with their details.
- **Responsive Design:** The application is designed to be responsive and user-friendly on various devices.
- **Loading Spinner:** A spinner is displayed while fetching data, enhancing user experience.

## Architecture

The application follows a component-based architecture, making it modular and easy to maintain. Key components include:

- **MakeSelection:** A dropdown for selecting the vehicle make.
- **YearSelection:** A dropdown for selecting the model year.
- **ResultPage:** Displays the results based on the selected make and year.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/s6sme/Vehicle-Selection-App.git>
   cd vehicle-selection-app
   ```
