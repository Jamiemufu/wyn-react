import ServiceRight from "./serviceRight";
import ServiceLeft from "./serviceLeft";

export default function Services() {
  return (
    <section
      className="text-black grid px-5 py-4 max-w-6xl m-auto"
      id="services"
    >
      <ServiceRight
        image="/wyn.jpg"
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum
            explicabo qui? Magni hic reiciendis eum quia dolorum cupiditate
            obcaecati facere voluptatibus ipsam inventore corporis, provident,
            esse sit sed vitae. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magni libero doloribus, ducimus necessitatibus
            dolore sed voluptatum at reprehenderit id voluptatibus cupiditate
            neque minus accusantium dolor, rerum optio veniam consequatur
            fugiat!"
        regulated={true}
      />
      <ServiceLeft
        image="/fault.jpg"
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum
            explicabo qui? Magni hic reiciendis eum quia dolorum cupiditate
            obcaecati facere voluptatibus ipsam inventore corporis, provident,
            esse sit sed vitae. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magni libero doloribus, ducimus necessitatibus
            dolore sed voluptatum at reprehenderit id voluptatibus cupiditate
            neque minus accusantium dolor, rerum optio veniam consequatur
            fugiat!"
        regulated={false}
      />
     <ServiceRight
        image="/callout.jpg"
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum
            explicabo qui? Magni hic reiciendis eum quia dolorum cupiditate
            obcaecati facere voluptatibus ipsam inventore corporis, provident,
            esse sit sed vitae. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magni libero doloribus, ducimus necessitatibus
            dolore sed voluptatum at reprehenderit id voluptatibus cupiditate
            neque minus accusantium dolor, rerum optio veniam consequatur
            fugiat!"
        regulated={false}
      />
      <ServiceLeft
        image="/fault.jpg"
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum
            explicabo qui? Magni hic reiciendis eum quia dolorum cupiditate
            obcaecati facere voluptatibus ipsam inventore corporis, provident,
            esse sit sed vitae. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magni libero doloribus, ducimus necessitatibus
            dolore sed voluptatum at reprehenderit id voluptatibus cupiditate
            neque minus accusantium dolor, rerum optio veniam consequatur
            fugiat!"
        regulated={false}
      />
     <ServiceRight
        image="/callout.jpg"
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum
            explicabo qui? Magni hic reiciendis eum quia dolorum cupiditate
            obcaecati facere voluptatibus ipsam inventore corporis, provident,
            esse sit sed vitae. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magni libero doloribus, ducimus necessitatibus
            dolore sed voluptatum at reprehenderit id voluptatibus cupiditate
            neque minus accusantium dolor, rerum optio veniam consequatur
            fugiat!"
        regulated={false}
      />
       <ServiceLeft
        image="/wyn.jpg"
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum
            explicabo qui? Magni hic reiciendis eum quia dolorum cupiditate
            obcaecati facere voluptatibus ipsam inventore corporis, provident,
            esse sit sed vitae. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magni libero doloribus, ducimus necessitatibus
            dolore sed voluptatum at reprehenderit id voluptatibus cupiditate
            neque minus accusantium dolor, rerum optio veniam consequatur
            fugiat!"
        regulated={false}
      />
    </section>
  );
}
