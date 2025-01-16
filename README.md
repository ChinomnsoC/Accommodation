# accommodation

An accommodation booking website for fixed meetings throughout the year. The aim is to make it a user-friendly site that can take up a high surge in server load about 3-4 times a year. The site will not exist throughout the year, it will just be running for that time.

## Scheduled times in 2025

- Easter - April 10th - April 20th
- November - November 3rd - November 5th
- December - December 14th - December 22nd

## Techstack

- Frontend (Single Page Application) - TypeScript, NodeJS, NextJS
- Database - Prisma, Supabase
  
## Website Plans- 2 weeks to complete

January 16th - January 31st. The website needs to be a random website that is customisable with an admin portal. From the admin portal we should be able to update the facilities available, and get a complete summary of bookings made. 

### Front End Requirements
- Landing page which shows the main button to click for private accommodations.
- Ensuite rooms page
- Group rooms page
- Flats/houses page
- Personal details page
- Payment screen
- Reservation complete
- Confirmation email
- Popup for holding and locking room
- Start again because timer has elapsed screen

###  Backend requirements
- Router
- Populating the backend with dummy rooms and facilities
- Availability check for rooms under a specific category
- hold logic
- Lock logic with timer.
- Stripe integration for payment

### Admin requirements 
- Admin get a list of all bookings made
- Update room availability

### Load/Stress testing
- Write NFT test for the enter product.

## The Break Down

For every goal, unit tests need to be written, and we should be able to see this on verbal. Before we proceed with goal one, we’d make sure we can merge the current branch into main on verbal and have it working.

#### Goal 1: Ensure that a user can navigate to the pages of all the categories of rooms. This will involve the following:
- Landing page which shows the main button to click for private accommodations.
- Ensuite rooms page
- Group rooms page
- Flats/houses page
- Router
- Populating the backend with dummy rooms and facilities

#### Goal 2: Ensure that a user can lock or hold a room, and navigate to the page for entering their details. This will involve the following:
- Availability check for rooms under a specific category
- hold logic
- Lock logic with timer.
- Popup for holding and locking room

#### Goal 3: Ensure that a user can complete payment, make a reservation, and receive the confirmation email. This will involve the following:
- Stripe integration for payment
- Payment screen
- Reservation complete
- Confirmation email

#### Goal 4: Admin can update the available rooms and see a summary of bookings. This will involve the following:
- Admin get a list of all bookings made
- Update room availability

#### Goal 5: The website is fully load tested. This will involve the following:
- Write NFT test for the enter product.


## Proposed User Journey

![image](./Screenshot%202024-09-18%20at%2022.43.29.png)
