// =====================================================================
// GAME OF LIFE CARDS: edit card wording and numbers here
// =====================================================================
// HOW TO EDIT ON GITHUB
//   1. Click the pencil icon (Edit this file).
//   2. Change ONLY what's inside the quotes, or the numbers, for example:
//        "title": "Flat tire"   ->   "title": "Flat tire on Fourth Plain"
//        "money": -150          ->   "money": -175
//   3. Keep every quote mark ", colon : and comma , exactly where it is.
//   4. Click "Commit changes". Wait 1-2 minutes, then refresh the site.
//
// money = dollars (use - for a cost)   happy = Happiness   health = Health
// SAFE TO CHANGE: title, text, money, happy, health
// DON'T CHANGE:   id, cat, kind, when (the odds on each card come from these)
// Need a quote mark inside your text? Use a single quote ' instead.
//
// The odds shown on Protection and Keep cards are calculated from this
// list, so they stay correct if you add or remove Life Events.
// Add or delete cards only between rounds, never mid-round.
// =====================================================================
 
window.CARDS = {
"rounds": 8,
"categories": ["Medical", "Transportation", "Job", "Home", "Money & Scams", "Family & Friends"],
 
// ---------------- LIFE EVENTS (kind: bad = costs you, good = helps you) ----------------
"life": [
  {"id": "MED-1", "cat": "Medical", "kind": "bad", "title": "Flu knocks you out", "text": "You're sick in bed for three days. You pay for a doctor visit and medicine.", "money": -60, "happy": -1, "health": -2},
  {"id": "MED-2", "cat": "Medical", "kind": "bad", "title": "Urgent care visit", "text": "A bad sinus infection sends you to urgent care.", "money": -75, "happy": 0, "health": -1},
  {"id": "MED-3", "cat": "Medical", "kind": "bad", "title": "Sprained ankle", "text": "You slip on wet stairs. Urgent care, an X-ray and a brace.", "money": -180, "happy": 0, "health": -2},
  {"id": "MED-4", "cat": "Medical", "kind": "bad", "title": "Emergency room", "text": "Sharp stomach pain at night. You spend hours in the ER at PeaceHealth Southwest.", "money": -600, "happy": -1, "health": -2},
  {"id": "MED-5", "cat": "Medical", "kind": "bad", "title": "Cavity", "text": "The dentist finds a cavity that needs a filling.", "money": -150, "happy": 0, "health": -1},
  {"id": "MED-6", "cat": "Medical", "kind": "bad", "title": "Broken glasses", "text": "Your glasses snap and you need a new pair to see at work.", "money": -180, "happy": -1, "health": 0},
  {"id": "MED-7", "cat": "Medical", "kind": "bad", "title": "Prescription price jump", "text": "Your regular medicine costs more this month.", "money": -90, "happy": 0, "health": 0},
  {"id": "MED-8", "cat": "Medical", "kind": "bad", "title": "Wildfire smoke week", "text": "Smoke fills the air. You buy an air purifier and still get headaches.", "money": -90, "happy": 0, "health": -1},
  {"id": "MED-9", "cat": "Medical", "kind": "good", "title": "Clean checkup", "text": "Your yearly checkup goes great.", "money": 0, "happy": 0, "health": 2},
  {"id": "MED-10", "cat": "Medical", "kind": "good", "title": "Free flu shot at work", "text": "Your job offers free flu shots.", "money": 0, "happy": 1, "health": 1},
  {"id": "MED-11", "cat": "Medical", "kind": "good", "title": "Daily walks", "text": "You start walking after work every day.", "money": 0, "happy": 1, "health": 2},
  {"id": "MED-12", "cat": "Medical", "kind": "good", "title": "Wellness bonus", "text": "Your employer pays you for finishing a health challenge.", "money": 100, "happy": 0, "health": 1},
  {"id": "TRN-1", "cat": "Transportation", "kind": "bad", "title": "Flat tire", "text": "Your car or bike gets a flat on the way to work.", "money": -150, "happy": -1, "health": 0},
  {"id": "TRN-2", "cat": "Transportation", "kind": "bad", "title": "Your ride breaks down", "text": "Your car needs a repair, or the bus route changes and you pay for rides all week.", "money": -400, "happy": -1, "health": 0},
  {"id": "TRN-3", "cat": "Transportation", "kind": "bad", "title": "Ticket", "text": "You get a parking ticket or a fare ticket.", "money": -150, "happy": -1, "health": 0},
  {"id": "TRN-4", "cat": "Transportation", "kind": "bad", "title": "Gas and fares go up", "text": "Getting around costs more this month.", "money": -60, "happy": 0, "health": 0},
  {"id": "TRN-5", "cat": "Transportation", "kind": "bad", "title": "Fender bender", "text": "A small crash at a red light on Mill Plain. Nobody is hurt, but you're shaken.", "money": -500, "happy": -2, "health": -1},
  {"id": "TRN-6", "cat": "Transportation", "kind": "bad", "title": "Late three times", "text": "Traffic on the I-5 bridge or late buses make you lose a shift.", "money": -120, "happy": -1, "health": 0},
  {"id": "TRN-7", "cat": "Transportation", "kind": "bad", "title": "Break-in", "text": "Someone breaks into your car or steals your bike lock.", "money": -250, "happy": -1, "health": 0},
  {"id": "TRN-8", "cat": "Transportation", "kind": "bad", "title": "Yearly fees", "text": "Car tabs or a yearly transit pass are due.", "money": -100, "happy": 0, "health": 0},
  {"id": "TRN-9", "cat": "Transportation", "kind": "good", "title": "Carpool buddy", "text": "A coworker lives near you and you split rides.", "money": 60, "happy": 1, "health": 0},
  {"id": "TRN-10", "cat": "Transportation", "kind": "good", "title": "Discount", "text": "Your insurance or transit pass gets cheaper.", "money": 50, "happy": 0, "health": 0},
  {"id": "TRN-11", "cat": "Transportation", "kind": "good", "title": "Free tune-up", "text": "A coupon covers your oil change or bike tune-up.", "money": 40, "happy": 0, "health": 0},
  {"id": "TRN-12", "cat": "Transportation", "kind": "good", "title": "Faster route", "text": "You find a quicker way to work.", "money": 0, "happy": 1, "health": 1},
  {"id": "JOB-1", "cat": "Job", "kind": "bad", "title": "Hours cut", "text": "Your boss cuts your hours this month.", "money": -300, "happy": -1, "health": 0},
  {"id": "JOB-2", "cat": "Job", "kind": "bad", "title": "Laid off for two weeks", "text": "Your workplace shuts down for repairs. Two weeks with no pay.", "money": -1200, "happy": -2, "health": 0},
  {"id": "JOB-3", "cat": "Job", "kind": "bad", "title": "Paycheck mistake", "text": "Your check is short because hours were missing.", "money": -150, "happy": -1, "health": 0},
  {"id": "JOB-4", "cat": "Job", "kind": "bad", "title": "New work gear", "text": "You need new boots and a uniform for work.", "money": -100, "happy": 0, "health": 0},
  {"id": "JOB-5", "cat": "Job", "kind": "bad", "title": "Hurt at work", "text": "You strain your back lifting boxes and miss two days.", "money": -100, "happy": 0, "health": -2},
  {"id": "JOB-6", "cat": "Job", "kind": "bad", "title": "Burnout week", "text": "Long shifts leave you exhausted.", "money": 0, "happy": -2, "health": -1},
  {"id": "JOB-7", "cat": "Job", "kind": "good", "title": "Raise", "text": "Your hard work pays off with a raise this month.", "money": 200, "happy": 1, "health": 0},
  {"id": "JOB-8", "cat": "Job", "kind": "good", "title": "Overtime", "text": "Extra hours at time-and-a-half.", "money": 250, "happy": 0, "health": -1},
  {"id": "JOB-9", "cat": "Job", "kind": "good", "title": "Bonus", "text": "Your team hit its goal and everyone gets a bonus.", "money": 400, "happy": 2, "health": 0},
  {"id": "JOB-10", "cat": "Job", "kind": "good", "title": "Promotion", "text": "You're promoted to shift lead. More pay, more stress.", "money": 300, "happy": 2, "health": -1},
  {"id": "JOB-11", "cat": "Job", "kind": "good", "title": "Paid training", "text": "Your employer pays you to earn a certificate.", "money": 100, "happy": 2, "health": 0},
  {"id": "JOB-12", "cat": "Job", "kind": "good", "title": "Great review", "text": "Your manager praises your work in front of the team.", "money": 0, "happy": 2, "health": 0},
  {"id": "HOM-1", "cat": "Home", "kind": "bad", "title": "Rent goes up", "text": "Your rent or what you pay your family goes up.", "money": -100, "happy": -1, "health": 0},
  {"id": "HOM-2", "cat": "Home", "kind": "bad", "title": "Roommate moves out", "text": "Your roommate leaves and you cover their share this month.", "money": -500, "happy": -2, "health": 0},
  {"id": "HOM-3", "cat": "Home", "kind": "bad", "title": "Stolen package", "text": "Someone steals a package from your door.", "money": -150, "happy": -1, "health": 0},
  {"id": "HOM-4", "cat": "Home", "kind": "bad", "title": "Water leak", "text": "A leak ruins some of your things.", "money": -200, "happy": -1, "health": 0},
  {"id": "HOM-5", "cat": "Home", "kind": "bad", "title": "Ice storm", "text": "The power is out for three days and your food spoils.", "money": -120, "happy": -1, "health": 0},
  {"id": "HOM-6", "cat": "Home", "kind": "good", "title": "Move-in special", "text": "You get money back on your housing this month.", "money": 200, "happy": 1, "health": 0},
  {"id": "HOM-7", "cat": "Home", "kind": "good", "title": "Free furniture", "text": "A neighbor gives you a couch and a table.", "money": 100, "happy": 1, "health": 0},
  {"id": "HOM-8", "cat": "Home", "kind": "good", "title": "Quick fix", "text": "Your landlord or family fixes a problem fast.", "money": 0, "happy": 2, "health": 0},
  {"id": "MON-1", "cat": "Money & Scams", "kind": "bad", "title": "Toll text scam", "text": "A text says you owe a bridge toll. You click and pay. It's fake.", "money": -80, "happy": -1, "health": 0},
  {"id": "MON-2", "cat": "Money & Scams", "kind": "bad", "title": "Cracked phone", "text": "Your phone screen shatters.", "money": -200, "happy": -1, "health": 0},
  {"id": "MON-3", "cat": "Money & Scams", "kind": "bad", "title": "Overdraft fee", "text": "A small purchase makes your bank account go below $0.", "money": -35, "happy": -1, "health": 0},
  {"id": "MON-4", "cat": "Money & Scams", "kind": "bad", "title": "Forgot a free trial", "text": "A free trial turned into a paid plan.", "money": -40, "happy": 0, "health": 0},
  {"id": "MON-5", "cat": "Money & Scams", "kind": "bad", "title": "Online shopping scam", "text": "You pay for shoes from a fake website. They never come.", "money": -150, "happy": -1, "health": 0},
  {"id": "MON-6", "cat": "Money & Scams", "kind": "good", "title": "Tax refund", "text": "You filed your taxes early and get money back.", "money": 300, "happy": 1, "health": 0},
  {"id": "MON-7", "cat": "Money & Scams", "kind": "good", "title": "Sold old stuff", "text": "You sell things you don't use anymore.", "money": 120, "happy": 0, "health": 0},
  {"id": "MON-8", "cat": "Money & Scams", "kind": "good", "title": "Cash back", "text": "Your bank account pays you a cash-back reward.", "money": 50, "happy": 1, "health": 0},
  {"id": "FAM-1", "cat": "Family & Friends", "kind": "bad", "title": "Family emergency", "text": "A family member needs you out of town for a few days.", "money": -400, "happy": -1, "health": 0},
  {"id": "FAM-2", "cat": "Family & Friends", "kind": "bad", "title": "Friend's wedding", "text": "You buy a gift and an outfit. It's a great day.", "money": -150, "happy": 2, "health": 0},
  {"id": "FAM-3", "cat": "Family & Friends", "kind": "bad", "title": "Loan to a friend", "text": "You lend a friend money and they don't pay it back.", "money": -200, "happy": -1, "health": 0},
  {"id": "FAM-4", "cat": "Family & Friends", "kind": "bad", "title": "Breakup", "text": "A relationship ends.", "money": 0, "happy": -3, "health": 0},
  {"id": "FAM-5", "cat": "Family & Friends", "kind": "good", "title": "Birthday money", "text": "A relative sends money for your birthday.", "money": 100, "happy": 2, "health": 0},
  {"id": "FAM-6", "cat": "Family & Friends", "kind": "good", "title": "Family dinner", "text": "Sunday dinner and leftovers to take home.", "money": 30, "happy": 2, "health": 0},
  {"id": "FAM-7", "cat": "Family & Friends", "kind": "good", "title": "Old friends reunion", "text": "Dinner with your high school crew.", "money": -40, "happy": 3, "health": 0},
  {"id": "FAM-8", "cat": "Family & Friends", "kind": "good", "title": "Volunteer day", "text": "You help sort food at the Clark County Food Bank.", "money": 0, "happy": 2, "health": 1}
],
 
// ---------------- PROTECTION (covers one category's bad events, lasts all game) ----------------
"protect": [
  {"id": "P1", "title": "Health insurance", "cat": "Medical", "text": "When you draw a Medical bill, you pay only $50 of it. Write what you saved in Protection Card Used."},
  {"id": "P2", "title": "Urgent care plan", "cat": "Medical", "text": "When you draw a Medical bill, it costs $100 less and you lose no Health."},
  {"id": "P3", "title": "Car or ride insurance", "cat": "Transportation", "text": "When you draw a Transportation bill, you pay only $100 of it."},
  {"id": "P4", "title": "Roadside help", "cat": "Transportation", "text": "When you draw a Transportation bill, it costs $150 less and you lose no Happiness."},
  {"id": "P5", "title": "Emergency fund", "cat": "Job", "text": "When you draw a Job setback, it costs half as much."},
  {"id": "P6", "title": "Backup skills", "cat": "Job", "text": "When you draw a Job setback, it costs $200 less."},
  {"id": "P7", "title": "Renters insurance", "cat": "Home", "text": "When you draw a Home problem, you pay only $100 of it."},
  {"id": "P8", "title": "Roommate agreement", "cat": "Home", "text": "When you draw a Home problem, it costs $150 less and you lose no Happiness."},
  {"id": "P9", "title": "Two-step login", "cat": "Money & Scams", "text": "When you draw a Money & Scams problem, it costs $0."},
  {"id": "P10", "title": "Phone protection plan", "cat": "Money & Scams", "text": "When you draw a Money & Scams problem, it costs $100 less."},
  {"id": "P11", "title": "Family savings jar", "cat": "Family & Friends", "text": "When you draw a Family & Friends cost, it costs $150 less."},
  {"id": "P12", "title": "Support network", "cat": "Family & Friends", "text": "When you draw a Family & Friends card, you lose no Happiness."}
],
 
// ---------------- KEEP (lasts all game: "every" = every round, or only when a matching Life Event is drawn) ----------------
"keep": [
  {"id": "K1", "title": "Meal prep habit", "text": "Cooking ahead saves money every week.", "money": 40, "happy": 0, "health": 0, "when": "every"},
  {"id": "K2", "title": "Gym habit", "text": "Working out keeps you strong.", "money": 0, "happy": 0, "health": 1, "when": "every"},
  {"id": "K3", "title": "Automatic savings", "text": "A little goes to savings every payday.", "money": 50, "happy": 0, "health": 0, "when": "every"},
  {"id": "K4", "title": "Weekly game night", "text": "Fun with friends every week.", "money": 0, "happy": 1, "health": 0, "when": "every"},
  {"id": "K5", "title": "Carpool group", "text": "You share rides with coworkers.", "money": 40, "happy": 0, "health": 0, "when": "every"},
  {"id": "K6", "title": "Bike commute", "text": "Biking saves gas and gets you moving.", "money": 20, "happy": 0, "health": 1, "when": "every"},
  {"id": "K7", "title": "Pet-sitting side job", "text": "Weekend pet sitting adds income, but you rest less.", "money": 80, "happy": 0, "health": -1, "when": "every"},
  {"id": "K8", "title": "Family dinner tradition", "text": "Sunday dinners keep you close.", "money": 0, "happy": 1, "health": 0, "when": "every"},
  {"id": "K9", "title": "Mentor at work", "text": "When you draw a good Job card, your mentor helps you earn more.", "money": 100, "happy": 0, "health": 0, "when": {"cat": "Job", "kind": "good"}},
  {"id": "K10", "title": "Professional network", "text": "When you draw a good Job card, your network gets you extra.", "money": 150, "happy": 0, "health": 0, "when": {"cat": "Job", "kind": "good"}},
  {"id": "K11", "title": "Stress plan", "text": "When you draw any bad Life Event, journaling or music helps you bounce back.", "money": 0, "happy": 1, "health": 0, "when": {"cat": "Any", "kind": "bad"}},
  {"id": "K12", "title": "First-aid kit", "text": "When you draw a Medical bill, you recover faster.", "money": 0, "happy": 0, "health": 1, "when": {"cat": "Medical", "kind": "bad"}}
],
 
// ---------------- USE NOW (one time, this round) ----------------
"use": [
  {"id": "U1", "title": "Extra shift", "text": "You pick up an extra shift.", "money": 180, "happy": 0, "health": -1},
  {"id": "U2", "title": "Sell stuff online", "text": "You sell things you don't need. Meet buyers in a public place.", "money": 120, "happy": 0, "health": 0},
  {"id": "U3", "title": "Cancel a subscription", "text": "You cancel an app you forgot about.", "money": 40, "happy": 0, "health": 0},
  {"id": "U4", "title": "Cook all week", "text": "You skip takeout for a week.", "money": 60, "happy": 0, "health": 1},
  {"id": "U5", "title": "Day at the park", "text": "A free day at the Vancouver Waterfront.", "money": 0, "happy": 2, "health": 0},
  {"id": "U6", "title": "Call an old friend", "text": "A long phone call with a friend.", "money": 0, "happy": 2, "health": 0},
  {"id": "U7", "title": "Checkup", "text": "A free preventive checkup with your insurance.", "money": 0, "happy": 0, "health": 2},
  {"id": "U8", "title": "Rest day", "text": "You take a full day off to recharge.", "money": 0, "happy": 1, "health": 1},
  {"id": "U9", "title": "Weekend gig", "text": "You help at an event for a day.", "money": 150, "happy": -1, "health": 0},
  {"id": "U10", "title": "Return an impulse buy", "text": "You return something you didn't need.", "money": 65, "happy": 0, "health": 0},
  {"id": "U11", "title": "Treat yourself", "text": "Dinner out with friends.", "money": -50, "happy": 3, "health": 0},
  {"id": "U12", "title": "Hike Silver Star Mountain", "text": "A day on the trail. Gas costs a little.", "money": -15, "happy": 1, "health": 2}
]
};
