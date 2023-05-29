# Trellis Garden Planner App

## Objective

A web app for use in planning a garden, particularly tracking planting dates and other time-sensitive tasks.

### Who is it for?

Any vegetable gardener, whether they're working a small community garden plot or a large homestead. Trellis is geared towards both gardeners growing from seed, as well as those transplanting nursery-bought seedlings.

## MVP Functionality

- Define basic garden settings such as zone and frost dates
- Add plants to planner from available templates
- Maintain a garden task list based on plants that have been added, with dates automatically calculated based on garden and plant settings
- Check off gardening tasks as they're completed

### Future Functionality

- Ability to customize plants from template
- Weather forecast, including frost and heat warnings
- Garden zone lookup by zip
- Guidance on selecting frost dates
- Easily adjust frost date based on forecast (w/ advice)
- GANNT/calendar view of tasks
- Succession planting
- Ability to add more than one garden
- Option to distinguish between beginner & experienced gardener, with tooltips displaying or not
- Email notifications: summary of the week's tasks, what was completed, links to helpful content
- Alerts (email & dashboard) to set the next season's frost dates
- Content & knowledge base
- Store (dropship)
- Major feature: space planning tool, eventually with a time component
- User setting: week start on Sunday or Monday

## App Status

### Current Feature: Dashboard/Tasks

- Before accessing dashboard, calendar, or seed library--validate that user has garden
- Max width for tables
- Red styling for overdue tasks
- How to handle plant tasks in db--separate table, with only completed & date?
- Keep due dates entirely dynamic based on plant data?

### Next Steps

- Set up plant db
- Dashboard ui (w/ hardcoded sample data to start?)
- Switch out bootstrap for tailwind
- Set up basic design system
- Research alternate names
- Schema/validation for zone/frost dates
- Remove unnecessary packages
- Change name/desc in package.json

### Questions/Unknowns

- Do users' plants need to work as copies/references to the original db?
- Is a nonrelational db the best option for this? Most flexible
- Best way to handle the plant db/JSON formatting? Lots of tools for the linting, but is there something better for the initial object building?
- Does it make sense to set up plant db/API separately, so it can be made open source in the future?
- When are standards for next season's frost dates set?
