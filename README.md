# knowledge-base

This is an application to track different aspects of your life. I intend on it to be open source and taken a bit seriously, as the tools I've currently developed are used by me in a spreadsheet form. This should enable better tracking. 

---

## Wireframes

I Developed primitive wireframes as guides to how I wanted the app to operate. I had not decided on exact trackers or exact display of the details page at the time as it would depend on the tracker used; furthermore, not all trackers require a page on their own.

## Entity Relationship Diagrams

All entries reference the user that entered them. This way, if entries need to be made public in the future, a simple "find all" method on mongoose should produce public records. Also, all schemas are technically independent and enable tremendous flexibility in future build of this project.

## Future Implementations

- I'm looking to harness the help of my fellow developers to expand the functionalities of the trackers and add additional trackers.

- Styling needs to be redone for the most part by a UX designer to make it more usable. 

- Additional login methods need to be added along with an email/password authnetication method

- The Feed need to be made public for everyone to see and will act like a Twitter feed. In addition, adding the ability to upload files and pictures allows the feed to be more usable.

## Where to find the App

[https://ds-knowledge-base.herokuapp.com](KnowledgeBase on heroku)
