import { FaGraduationCap, FaCode, FaBook, FaLaptopCode, FaBrain } from 'react-icons/fa';

const ResourceBank = () => {
  const resources = [
    {
      name: 'Khan Academy',
      url: 'https://www.khanacademy.org',
      description: 'Free world-class education for anyone, anywhere',
      icon: <FaGraduationCap className="w-6 h-6" />
    },
    {
      name: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org',
      description: 'Learn to code for free with hands-on tutorials',
      icon: <FaCode className="w-6 h-6" />
    },
    {
      name: 'MDN Web Docs',
      url: 'https://developer.mozilla.org',
      description: 'Resources for developers, by developers',
      icon: <FaBook className="w-6 h-6" />
    },
    {
      name: 'Codecademy',
      url: 'https://www.codecademy.com',
      description: 'Learn to code interactively, for free',
      icon: <FaLaptopCode className="w-6 h-6" />
    },
    {
      name: 'MIT OpenCourseWare',
      url: 'https://ocw.mit.edu',
      description: 'Free access to MIT course materials',
      icon: <FaBrain className="w-6 h-6" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Learning Resources</h1>
      
      <div className="grid gap-6">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="text-blue-500 mr-4">
              {resource.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{resource.name}</h2>
              <p className="text-gray-600">{resource.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourceBank;