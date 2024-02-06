function Contact() {
  return (
    <section className="w-full py-2 px-2 flex flex-col items-center gap-4">
      <h1 className="text-2xl underline text-center font-bold">Contact Us</h1>
      <div className="max-w-[500px] flex flex-col gap-1">
        <p className="leading-7">
          Thank you for considering our e-commerce webshop for your clothing
          needs. We value your feedback and are here to assist you in any way we
          can. Feel free to reach out to us using the contact information
          provided below. Whether you have inquiries about products, orders, or
          any other concerns, our dedicated team is ready to help.
        </p>
        <h2 className="font-bold text-lg">Contact Information:</h2>
        <p>
          <strong>Customer Support Email:</strong>{" "}
          <a
            href="mailto: support@example.com"
            className="transition-all hover:underline"
          >
            support@example.com
          </a>
        </p>
        <p>
          {" "}
          <strong>Phone Number:</strong>{" "}
          <a href="tel:123-456-7890" className="transition-all hover:underline">
            [+1 (123) 456-7890]
          </a>
        </p>
        <p>
          <strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM
          (GMT)
        </p>
        <div className="w-full bg-black py-1 mt-2 rounded-md"></div>
        <h3 className="font-bold text-lg mt-2">Hello Awesome Shoppers! 👋</h3>
        <p className="leading-7">
          I'm Lucas, the proud developer and creator of our stylish fake
          e-commerce webshop. Crafting this platform has been an exciting
          journey, and I'm thrilled to share it with you. Your satisfaction is
          my top priority, and I'm always working to enhance your online
          shopping experience.
          <br />
          If you're curious about the magic behind the scenes, explore the heart
          of our webshop - the codebase - on my GitHub page. Check out the
          repository to see the technology stack, improvements, and
          contributions that make our webshop a seamless and enjoyable place to
          shop.
          <br />
          <a
            href="https://github.com/LucasDaSilva96"
            target="_blank"
            rel="noreferrer"
            className=" text-cyan-600 ml-[-8px]"
          >
            🚀 Visit My GitHub Page
          </a>
          <br />
          Your feedback is invaluable, and I'm eager to hear your thoughts.
          Whether it's a bug report, a feature suggestion, or just a friendly
          chat, don't hesitate to reach out. Your input helps shape the future
          of our webshop.
          <br />
          Thank you for being a part of this journey. Happy shopping!
          <br />
          Cheers,
          <br />
          Lucas
          <br />
          Webshop Developer
        </p>
      </div>
    </section>
  );
}

export default Contact;
