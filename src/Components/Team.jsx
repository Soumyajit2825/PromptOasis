import React from 'react';
import DebadityaImage from '../Assets/Debaditya.jpg';
import SoumyaImage from '../Assets/Soumyajit Portfolio Image.jpeg';
import AnushkaImage from '../Assets/Anushka.jpg';
import TrishaImage from '../Assets/Trisha.jpg';
import PritanshuImage from '../Assets/Pritanshu.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Soumyajit Mondal",
      image: SoumyaImage,
      description: "Owner & Founder of RESOURCIO COMMUNITY | Open Source Contributor | GSSoC'23 | CS Undergrad",
      linkedin: "https://www.linkedin.com/in/soumyajit-mondal2825/"
    },
    {
      id: 2,
      name: "Debaditya Som",
      image: DebadityaImage,
      description: "CS undergrad | Specialization in Business Systems | DevOps Enthusiast",
      linkedin: "https://www.linkedin.com/in/debaditya-som-877032262/"
    },
    {
      id: 3,
      name: "Anushka Bhowmick",
      image: AnushkaImage,
      description: "Learning MERN Stack | Open Source Enthusiast | CS Undergrad",
      linkedin: "https://www.linkedin.com/in/anushkabhowmick/"
    },
    {
      id: 4,
      name: "Trisha Seal",
      image: TrishaImage,
      description: "Aspiring Full-Stack Developer || Competitive Coder || Open Source Enthusiast",
      linkedin: "https://www.linkedin.com/in/trisha-seal/"
    },
    {
      id: 5,
      name: "Pritanshu Samanta",
      image: PritanshuImage,
      description: "5🌟in C at HackerRank | JAVA | HTML | CSS | JAVASCRIPT",
      linkedin: "https://www.linkedin.com/in/pritanshu-samanta-956450260"
    },
  ];

  return (
    <div id="team" className="bg-black py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md p-6 sm:p-4 hover:shadow-xl transition duration-300 cursor-pointer">
              <img src={member.image} alt={member.name} className="w-full h-56 object-full mb-4 rounded-md" />
              <h3 className="flex justify-center text-xl font-semibold text-gray-800">{member.name}</h3>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
