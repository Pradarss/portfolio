import { CertificationsArea } from "../../styles";
import CertiCards from "./CertiCards";
const certifications = [
  {
    image: "/assets/webdev.png",
    title: 'React Native - The practical guide [2025]',
    para: 'The React Native Development course is an in-depth program designed to equip learners with the skills to build powerful cross-platform mobile applications. Covering the fundamentals of React Native, the course delves into key concepts like navigation, state management, and working with native APIs to create fully functional apps for both iOS and Android. It also emphasizes best practices in mobile app development, including performance optimization, debugging, and deploying to app stores. By the end of the course, participants are well-prepared to develop seamless, user-friendly mobile applications that run efficiently across platforms.'
  },
  {
    image: "/assets/webdev.png",
    title: 'The Complete Web Development Bootcamp',
    para: 'The Complete Web Development Bootcamp is a rigorous and comprehensive course that equips learners with the full spectrum of skills required for modern web development. Spanning both front-end and back-end technologies, the bootcamp covers HTML, CSS, JavaScript, and frameworks like React for front-end development. On the back-end, it delves into Node.js, Express, and MongoDB, providing a complete understanding of the MERN stack. The bootcamp also emphasizes the importance of version control with Git, testing, and deployment strategies, ensuring that participants can confidently build and deploy full-fledged web applications.'
  },
  {
    image: "/assets/dsa.png",
    title: 'Mastering Data structures and Algorithms using C and C++',
    para: 'The Mastering Data Structures and Algorithms using C and C++ certification provides an in-depth understanding of the essential concepts of data structures and algorithms, leveraging the power of C and C++ programming languages. This course covers a wide range of fundamental topics, including arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching algorithms. With a strong focus on problem-solving and optimization, it enhances your ability to implement efficient solutions to real-world coding challenges. Whether you\'re preparing for technical interviews or aiming to improve your computational thinking, this certification ensures you gain the skills necessary to tackle complex algorithmic problems and write clean, efficient code.'
  },
  {
    image: "/assets/mongoDB.png",
    title: 'MongoDB Basics Certification',
    para: 'The MongoDB Basics Certification offers a deep dive into the world of NoSQL databases, focusing on MongoDB, one of the most popular databases used in modern web applications. This certification covers the fundamentals of MongoDB, including data modeling, CRUD operations, indexing, and aggregation frameworks. Additionally, it explores best practices for database design and optimization, ensuring that participants can effectively use MongoDB in scalable and high-performance applications.'
  },
  {
    image: "/assets/networkbulls.png",
    title: 'Network Bulls Certification',
    para: 'This certification from Network Bulls is a comprehensive course that covers a wide range of networking technologies. It includes in-depth knowledge of various networking protocols, network security measures, and the configuration of different networking devices. The course also emphasizes hands-on training, allowing participants to gain practical experience in configuring and managing networks, preparing them for real-world networking challenges.'
  },


];

  

function Certifications(){
    return(
        <CertificationsArea>
            {certifications.map((certification,index)=>(
                <CertiCards
                    key={index}
                    image={certification.image}
                    title={certification.title}
                    para={certification.para}
                />
            ))}
        </CertificationsArea>
    )
}

export default Certifications;