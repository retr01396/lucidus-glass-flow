export interface EventData {
  id: string;
  title: string;
  category: string;
  prizePool: string;
  prizeDistribution: {
    first: string;
    second?: string;
    finalists?: string;
  };
  fee: string;
  imageTheme: string;
  registrationLink: string;
  coordinators: {
    faculty: string;
    student: string;
  };
  guidelines: string[];
}

export interface EventsCollection {
  management: EventData[];
  nonManagement: EventData[];
}

export const eventsData: EventsCollection = {
  management: [
    {
      id: "best-manager",
      title: "PROJECT KAIZEN",
      category: "Best Manager",
      prizePool: "₹15,000",
      prizeDistribution: {
        first: "₹15,000"
      },
      fee: "₹500",
      imageTheme: "One Piece / Leadership",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "Jerry Johny (+91 98094 75347)",
        student: "Sreerag (+91 63531 15294)"
      },
      guidelines: [
        "Individual participation.",
        "Formal business attire is mandatory.",
        "Laptop and internet connectivity required.",
        "Rounds evaluate managerial thinking, leadership, and decision-making.",
        "Malpractice leads to immediate disqualification."
      ]
    },
    {
      id: "best-management-team",
      title: "THE SHOGUN SYNDICATE",
      category: "Best Management Team",
      prizePool: "₹14,500",
      prizeDistribution: {
        first: "₹10,000",
        finalists: "₹1,500 each"
      },
      fee: "₹250 per head",
      imageTheme: "Samurai / Teamwork",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "Roshan David (+91 98090 55360)",
        student: "Adithya Rajan (+91 89219 28096)"
      },
      guidelines: [
        "Strictly a team event (4 members from the same institution).",
        "Open to UG and PG students.",
        "Formal attire required.",
        "Mobile usage prohibited unless specified.",
        "Rounds revealed on the spot."
      ]
    },
    {
      id: "finance-game",
      title: "THE MONEY ALCHEMIST",
      category: "Finance Game",
      prizePool: "₹14,500",
      prizeDistribution: {
        first: "₹10,000",
        finalists: "₹1,500 each"
      },
      fee: "₹250 per head",
      imageTheme: "Alchemy / Gold",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "Sneha John (+91 70123 27432)",
        student: "Prince Antony (+91 86067 33853)"
      },
      guidelines: [
        "Team of 4 members from the same college.",
        "Laptops required (no devices provided).",
        "Participants must arrange their own internet.",
        "Strict adherence to time limits."
      ]
    },
    {
      id: "marketing-game",
      title: "LOG HORIZON",
      category: "Marketing Game",
      prizePool: "₹14,500",
      prizeDistribution: {
        first: "₹10,000",
        finalists: "₹1,500 each"
      },
      fee: "₹250 per head",
      imageTheme: "Strategy / Adventure",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "Kavya K B (+91 95268 74419)",
        student: "Ashna M Sunil (+91 75108 45626)"
      },
      guidelines: [
        "Team of 4 members from the same college.",
        "Laptops and stable internet required.",
        "Valid college ID card mandatory."
      ]
    },
    {
      id: "operations-game",
      title: "SHADOW BREAK",
      category: "Operations Game",
      prizePool: "₹14,500",
      prizeDistribution: {
        first: "₹10,000",
        finalists: "₹1,500 each"
      },
      fee: "₹250 per head",
      imageTheme: "Tactical / Dark",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "John Mathew (+91 80869 50545)",
        student: "Shreyas Mathew (+91 99958 28248)"
      },
      guidelines: [
        "Team of 4 members from the same college.",
        "Bring your own laptops and internet.",
        "Judges' decision is final and binding."
      ]
    },
    {
      id: "hr-game",
      title: "THE BOND BUREAU",
      category: "HR Game",
      prizePool: "₹14,500",
      prizeDistribution: {
        first: "₹10,000",
        finalists: "₹1,500 each"
      },
      fee: "₹250 per head",
      imageTheme: "Connection / Spy",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "Sneha John (+91 70123 27432)",
        student: "Littal Shanil (+91 81138 31671)"
      },
      guidelines: [
        "Team of 4 members from the same college.",
        "Laptops required.",
        "Malpractice results in disqualification."
      ]
    }
  ],
  nonManagement: [
    {
      id: "fashion-show",
      title: "ELYSE",
      category: "Fashion Show",
      prizePool: "₹30,000",
      prizeDistribution: {
        first: "₹20,000",
        second: "₹10,000"
      },
      fee: "₹2000 per team",
      imageTheme: "Glamour / Anime Style",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "Renu J Kandathil (+91 94007 95632)",
        student: "Aibal Thomas (+91 95399 18593)"
      },
      guidelines: [
        "8-12 members per team (same college).",
        "Open theme (No vulgarity).",
        "Time limit: 8-10 minutes.",
        "Green room provided.",
        "Music (MP3) & Visuals must be submitted on USB."
      ]
    },
    {
      id: "group-dance",
      title: "HIBIKE",
      category: "Group Dance",
      prizePool: "₹20,000",
      prizeDistribution: {
        first: "₹15,000",
        second: "₹5,000"
      },
      fee: "₹1500 per team",
      imageTheme: "Energy / Music",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "Renu J Kandathil (+91 94007 95632)",
        student: "Aadithyasiva K V (+91 80751 36483)"
      },
      guidelines: [
        "5-10 participants per group.",
        "Time limit: 5-8 minutes.",
        "No comedy acts or excessive drama.",
        "Props/hazardous materials (fire) prohibited."
      ]
    },
    {
      id: "ipl-auction",
      title: "GRANDLINE",
      category: "IPL Auction",
      prizePool: "₹14,500",
      prizeDistribution: {
        first: "₹10,000",
        finalists: "₹1,500 each"
      },
      fee: "₹250 per head",
      imageTheme: "Cricket / Strategy",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "Roshan David (+91 98090 55360)",
        student: "Sidharth S Menon (+91 80784 86125)"
      },
      guidelines: [
        "Teams of 2-4 members.",
        "Formal business attire mandatory.",
        "No mobile phones allowed.",
        "Judges' decision is final."
      ]
    },
    {
      id: "football",
      title: "BLUE LOCK",
      category: "3's Football",
      prizePool: "₹7,000",
      prizeDistribution: {
        first: "₹5,000",
        second: "₹2,000"
      },
      fee: "₹500 per team",
      imageTheme: "Sports / Intensity",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "John Mathew (+91 80869 50545)",
        student: "Shahil V P (+91 94964 58793)"
      },
      guidelines: [
        "4-5 members per team.",
        "Turf boots required.",
        "Referees decision is final.",
        "Participants responsible for equipment."
      ]
    },
    {
      id: "fest-reel",
      title: "FEST REEL",
      category: "Video Reel Competition",
      prizePool: "₹3,000",
      prizeDistribution: {
        first: "₹3,000"
      },
      fee: "Free",
      imageTheme: "Content Creation / Festival",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header",
      coordinators: {
        faculty: "Mr. Vishnu K",
        student: "Aldrin A J (+91 88480 52598)"
      },
      guidelines: [
        "Only original footage shot during the fest is allowed.",
        "Reel duration: 60 seconds video using mobile or camera.",
        "Basic editing allowed (No AI editing).",
        "Content must be professional and appropriate.",
        "Reel should include minimum 4 events.",
        "One reel per participant.",
        "Submit before the given deadline.",
        "No vulgarity allowed.",
        "Participants must bring all necessary accessories (laptop, phone, internet access, etc.).",
        "Judges decision will be final."
      ]
    }
  ]
};
