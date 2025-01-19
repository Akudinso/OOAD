//Event Class
class Event {
    static totalEvents = 0; 
  
    constructor(eventName, date, venue) {
      this.eventId = ++Event.totalEvents; 
      this.eventName = eventName;
      this.date = date;
      this.venue = venue;
    }
  
    //Instance method to display event details
    displayDetails() {
      return `Event ID: ${this.eventId}\nName: ${this.eventName}\nDate: ${this.date}\nVenue: ${this.venue}`;
    }
  
   //static method to get allevents
    static fetchAllEvents(eventsList) {
      return eventsList.map(event => event.displayDetails()).join("\n\n");
    }
  }
  
//Ticket class
class Ticket {
    static totalTickets = 0; 
  
    constructor(eventId, userName) {
      this.ticketId = ++Ticket.totalTickets; 
      this.eventId = eventId;
      this.userName = userName;
    }
  
   //Instance method to assign ticket to USer
    assignToUser(newUserName) {
      this.userName = newUserName;
    }
  
    //static method to a validate ticket
    static validate(ticket, eventsList) {
      const eventExists = eventsList.some(event => event.eventId === ticket.eventId);
      return eventExists ? `Ticket ID: ${ticket.ticketId} is valid.` : `Ticket ID: ${ticket.ticketId} is invalid.`;
    }
  }
  
  //usage
const event1 = new Event("GDG DevFest", "2025-03-15", "Hotel Sylvia");
const event2 = new Event("Tech Conference", "2025-04-20", "Silicon Valley Center");
  
const eventsList = [event1, event2];
  
const ticket1 = new Ticket(event1.eventId, "Ebuka");
const ticket2 = new Ticket(event2.eventId, "Naruto");
  
console.log(event1.displayDetails());
console.log(event2.displayDetails());
  
console.log(Ticket.validate(ticket1, eventsList));
console.log(Ticket.validate(ticket2, eventsList));
  
console.log(Event.fetchAllEvents(eventsList));