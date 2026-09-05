export interface FacultyMember {
  name: string;
  department: string;
  message: string;
}

export const faculty: Record<string, FacultyMember> = {
  "09/12": {
    name: "Mahima Ma'am",
    department: "Computer Science Engineering",
    message: "You're one of the best when it comes to teaching DBMS. You're the most charming woman in our department."
  },
  "17/11": {
    name: "Hon'ble Vijaya Kumari HoD Ma'am",
    department: "Computer Science Engineering",
    message: "Your dedication towards college excellence and your contribution towards the CSE department is immense. We always look up to you and admire your leadership."
  },
  "27/08": {
    name: "Hon'ble Sudheer Das Sir",
    department: "Computer Science Engineering",
    message: "Your contribution towards BD&CC subject is immense."
  },
  "22/01": {
    name: "Shekar Sir",
    department: "Computer Science Engineering",
    message: "Thank you for your guidance, dedication, and for inspiring us to reach higher every day."
  },
  "09/08": {
    name: "Hima Bindu Ma'am",
    department: "Computer Science Engineering",
    message: "Thank you for your constant encouragement, your java class is the best and thanks for teaching us IoT during Ecet Classes"
  },
  "16/01": {
    name: "S. Swathi Ma'am",
    department: "Computer Science Engineering",
    message: "Thank you for making learning engaging and for always supporting us in our journey."
  },
  "24/12": {
    name: "Teja Sir",
    department: "Computer Science Engineering",
    message: "Thank you for being our class teacher. #androidsir"
  },
  "19/09": {
    name: "Rajini Ma'am",
    department: "Computer Science Engineering",
    message: "Thank you for your wisdom, patience, and for always being a guiding light for students. Our DSA Ma'am <3"
  },
  "24/02": {
    name: "Dileep Sir",
    department: "Computer Science Engineering",
    message: "Without you we would be still figuring what is #include <stdio.h> ."
  },
  "13/12": {
    name: "Anusha Ma'am",
    department: "Computer Science Engineering",
    message: "The kindest of all. The hon'ble BCE, OS, WT, Python Ma'am"
  },
  "25/02": {
    name: "Gayathri Ma'am",
    department: "Computer Science Engineering",
    message: "Thank you for your inspiring guidance and for nurturing curiosity in every lecture."
  },
  "24/06": {
    name: "Mounika Ma'am",
    department: "Computer Science Engineering",
    message: "Thank you for your support, enthusiasm, and for helping us grow academically and personally."
  },
  "08/12": {
    name: "Yamini Ma'am",
    department: "Computer Science Engineering",
    message: "Thank you for your dedication and for always believing in our potential."
  },
  "24/03": {
    name: "Yagna Sri Ma'am",
    department: "Computer Science Engineering",
    message: "Thank you for your constant guidance, clarity, and unwavering encouragement."
  },
  "30/05": {
    name: "Kalyani Ma'am",
    department: "Computer Science Engineering",
    message: "Thank you for your invaluable teaching and for guiding us with great care."
  },
  "21/02": {
    name: "Sai Krishna Sir",
    department: "Computer Science Engineering",
    message: "Thank you for your mentorship, dedication, and for pushing us to achieve excellence, Mr Scientist."
  },
  "03/05": {
    name: "B. Pavan Sir",
    department: "Computer Science Engineering",
    message: "Thank you for your guidance."
  },
  "04/07": {
    name: "Krishnam Raju Sir",
    department: "Computer Science Engineering",
    message: "Thank you for your contribution in maintaining labs."
  },
  "18/08": {
    name: "Raja Lakshmi Ma'am",
    department: "Computer Science Engineering",
    message: "Thank you for your contribution in maintaining labs."
  },
  "02/02": {
    name: "Ashok Sir",
    department: "Computer Science Engineering",
    message: "Thank you for your contribution in maintaining labs."
  },
  "23/11": {
    name: "Lokesh Sir",
    department: "Computer Science Engineering",
    message: "Thank you for your contribution in maintaining labs."
  },
  "08/01": {
    name: "Pavan Sir",
    department: "Basic Sciences (Physics)",
    message: "Thank you for building our strong foundation in Physics and guiding us with clarity."
  },
  "29/12": {
    name: "Sri Devi Ma'am",
    department: "Basic Sciences (Chemistry)",
    message: "Thank you for making Chemistry fascinating and for your warm, inspiring support."
  },
  "18/07": {
    name: "Annapurna Ma'am",
    department: "Basic Sciences (Mathematics)",
    message: "Thank you for making Mathematics intuitive and for guiding us towards problem solving."
  },
  "13/06": {
    name: "Karuna Ma'am",
    department: "Basic Sciences (English Communication)",
    message: "Thank you for empowering our communication skills and building our confidence."
  },
  "13/08": {
    name: "P. Swathi Ma'am",
    department: "Electronics and Communication Engineering",
    message: "Thank you for your inspiring teaching and guidance in Electronics & Communication."
  },
  "11/09": {
    name: "Kanakaraju Sir (911?)",
    department: "Mechanical Engineering",
    message: "Thank you for your dedication and for sharing your deep expertise in Engineering Drawing and Industrial Management & Entrepreneurship."
  },
  "05/07": {
    name: "Syamala Ma'am",
    department: "Electronics and Communication Engineering",
    message: "Thank you for your valuable D.E classes and for your charmness"
  },
  "02/08": {
    name: "Lakshmi Ma'am",
    department: "Basic Sciences English Communication",
    message: "Thank you for empowering our communication skills and building our confidence."
  },
  "26/04": {
    name: "Murthy Sir",
    department: "Basic Department",
    message: "Thank you for your dedication and for sharing your deep expertise in Engineering Drawing."
  }
};

/**
 * Normalizes input strings like "9/12", "09 / 12", "9-12", "22-10", "11/9" to "DD/MM"
 */
export function normalizeBirthday(input: string): string {
  const cleaned = input.trim().replace(/[-.\s]/g, "/");
  const parts = cleaned.split("/").filter(Boolean);
  if (parts.length < 2) return input;

  const day = parts[0].padStart(2, "0");
  const month = parts[1].padStart(2, "0");

  return `${day}/${month}`;
}

export function findFacultyByBirthday(input: string): FacultyMember | null {
  const key = normalizeBirthday(input);
  const found = faculty[key];
  if (!found) return null;
  return {
    ...found,
    department: found.department || "Computer Science Engineering",
  };
}
