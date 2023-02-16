import React, { useEffect, useState } from "react";
import styles from "../styles/blogs.module.css";
import Modal from "./Modal";

const STORE = [
  {
    link: "https://docs.google.com/document/d/1FBe_xUsaC4GGgfGIQYHYON9DjMfqQbwWh-NWgd5A7qc/edit",
    image: "blogs/blog1.png",
    title:
      "Unlocking the Potential of the Corporate Metaverse: The Future of Technical Training",
    body: "The corporate metaverse is an emerging technology that has the potential to revolutionize the way we approach technical training. This virtual world, created by the convergence of virtual reality, augmented reality and artificial intelligence, offers a new level of engagement and interactivity that can greatly enhance the learning experience. With the use of interactable avatars of employees, immersive, modularized inductions, and game-based training missions, the corporate metaverse can provide measurable success metrics and improve employee engagement and retention. One of the key benefits of using the corporate metaverse for technical training is the ability to create highly realistic and interactive avatars of employees. These avatars can be customized to reflect the unique characteristics and skills of each employee, making it easy to identify and target specific areas for improvement. This level of personalization also makes it easier for employees to connect with their training and to see the direct relevance to their job. Additionally, the use of avatars allows for virtual interactions between employees, fostering collaboration and teamwork in a virtual environment. Another benefit of the corporate metaverse is the ability to create immersive, modularized inductions. This means that training programs can be broken down into smaller, more manageable chunks, making it easier for employees to absorb and retain the information. Additionally, by leveraging the power of virtual reality, the corporate metaverse can create a highly engaging and interactive training experience that keeps employees engaged and motivated. The use of modularized inductions allows for a more flexible and adaptable training approach, where employees can access specific modules as and when required, making it more convenient for them. The use of virtual twin of the real environment can also be a powerful tool for helping learners gain operational efficiencies in the real world. By recreating the exact layout, equipment and processes of a real-world environment in a virtual setting, employees can become familiar with the details and procedures of their work area before they ever set foot in it. This can reduce the time it takes for employees to become fully operational and can help to minimize costly mistakes or errors. One of the most exciting aspects of the corporate metaverse for technical training is the ability to create game-based missions. These missions can be designed to simulate real-world scenarios and challenges, allowing employees to practice and apply their new skills in a safe and controlled environment. This not only improves retention, but it also allows for measurable success metrics to be collected and analyzed, providing valuable insights into the effectiveness of the training program. The use of game-based missions can also add a fun and competitive element to the training, making it more engaging and enjoyable for employees. The corporate metaverse also allows for a more cost-effective and efficient training approach. Traditional training methods, such as in-person training sessions and classroom-based training, can be costly and time-consuming. With the corporate metaverse, training can be done remotely, saving on travel and accommodation costs. Additionally, the use of virtual reality eliminates the need for expensive equipment and physical training materials. In conclusion, the corporate metaverse has the potential to revolutionize the way that companies train their employees. By leveraging the power of virtual reality and interactive avatars, organizations can create immersive and engaging learning experiences that help employees acquire new skills and knowledge in a fraction of the time it would take through traditional training methods. Additionally, the use of virtual twin of real environment and game-based training missions can help to increase employee engagement and to encourage active participation in the learning process. As the technology behind the corporate metaverse continues to evolve and improve, we can expect to see even more powerful and effective training solutions in the future.",
  },
  {
    link: "https://docs.google.com/document/d/1FBe_xUsaC4GGgfGIQYHYON9DjMfqQbwWh-NWgd5A7qc/edit",
    image: "blogs/blog2.png",
    title:
      "Unlocking the Potential of the Corporate Metaverse: The Future of Technical Training",
    body: "The metaverse, a virtual world where users can interact with digital objects and environments, has been gaining more and more attention in recent years. With the pandemic forcing many businesses to adopt remote work and virtual interaction, the metaverse has become an attractive platform for training and education. The quick-service restaurant (QSR) industry is no exception, as metaverse training has the potential to revolutionize how QSR employees are trained in food preparation, efficient order processing, customer service and food safety procedures. One of the key areas where metaverse training can make a big difference is in food preparation. Trainers can use virtual simulations to teach techniques for cutting, cooking, and plating food, and trainees can practice these techniques in real-time. The virtual environment also provides the opportunity to try out new recipes and cooking techniques without the risk of wasting food or time. Efficiently processing orders and following standard operating procedures (SOPs) are critical for ensuring smooth and effective QSR operations. In a virtual environment, trainees can learn about the steps involved in processing orders and following SOPs, and practice these procedures in real-time. Trainers can use virtual simulations to recreate real-world scenarios and provide feedback to trainees on their performance, helping them develop strong operational skills that will serve them well in real-world settings. This not only helps to improve operations, but also promotes a culture of compliance and attention to detail, which is essential for success in the QSR industry. Customer service is another crucial aspect of QSR operations, and metaverse training provides an ideal platform for training employees in this area. In a virtual environment, trainees can practice handling customer complaints, dealing with difficult customers, and working through common customer service scenarios. Trainers can use virtual simulations to recreate real-world scenarios and provide feedback to trainees on their performance, helping them develop strong customer service skills that will serve them well in real-world settings. Food safety is a major concern for the QSR industry, and metaverse training provides a great platform for training employees in this area. Trainees can learn about the importance of food safety, as well as best practices for maintaining a safe and sanitary kitchen environment. In a virtual environment, trainees can see the consequences of poor food handling and preparation practices, and learn how to prevent foodborne illnesses from spreading. Additionally, virtual training can be customized to include information about specific food safety regulations and requirements, ensuring that trainees receive comprehensive and up-to-date training in this important area. In conclusion, the metaverse provides a powerful and innovative platform for QSR training and education. Metaverse training offers a safe and controlled environment for trainees to practice and develop their skills, and provides trainers with the ability to customize training to meet the specific needs of each employee. By adopting metaverse training, QSRs can ensure that their employees are equipped with the skills and knowledge they need to succeed in a competitive and fast-paced industry.",
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]),
    [visible, setVisible] = React.useState(false),
    [modal, setModal] = React.useState({});

  useEffect(() => {
    setBlogs(
      STORE.map((e, i) => (
        <div
          onClick={() => {
            setVisible(true);
            setModal(e);
          }}
          key={i}
          href={e.link}
          className={styles.blog}
        >
          <img className={styles.blog_img} src={e.image} />
          <div className={styles.blog_title}>{e.title}</div>
          <div className={styles.blog_body}>{e.body}</div>
        </div>
      ))
    );
  }, []);

  return (
    <>
      <div className={styles.blog_wrapper}>
        <div className={styles.title}>BLOG</div>
        <div className={styles.blogs}>{blogs}</div>
      </div>

      <Modal setVisible={setVisible} visible={visible} modal={modal} />
    </>
  );
};

export default Blogs;
