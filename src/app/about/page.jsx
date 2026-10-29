import Image from 'next/image'

const AboutPage = () => {
  return (
    <section className="content">
      <h2 className="section-title">About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti itaque exercitationem pariatur mollitia iusto
        et blanditiis. Quae sequi reprehenderit dolorum repudiandae quas rem quam error, id quidem! Accusamus nihil eos,
        quod cum ad alias laborum itaque architecto corporis debitis aspernatur.
      </p>
      <img src="./1200x900.webp" alt="blue car" width="200" height="150" />
      <br />
      <Image src="/1200x900.webp" alt="blue car" width="600" height="450" priority />
      <br />
      <Image
        src="https://webcademy.ru/blog/wp-content/uploads/2023/07/Travel-X-Cover-870x400.jpg"
        alt="blue car"
        width="435"
        height="200"
        priority
      />
    </section>
  )
}

export default AboutPage
