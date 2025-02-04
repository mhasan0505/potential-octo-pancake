import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";

const testimonialList = [
  [
    {
      photo: "https://placehold.co/400",
      name: "Farhana Rahman",
      content:
        "This water filter has completely changed how we experience drinking water. My entire family loves the clean and fresh taste!",
      rating: 4.5,
    },
    {
      photo: "https://placehold.co/400",
      name: "Farhana Rahman",
      content:
        "This water filter has completely changed how we experience drinking water. My entire family loves the clean and fresh taste!",
      rating: 4.5,
    },
    {
      photo: "https://placehold.co/400",
      name: "Farhana Rahman",
      content:
        "This water filter has completely changed how we experience drinking water. My entire family loves the clean and fresh taste!",
      rating: 4.5,
    },
  ],
  [
    {
      photo: "https://placehold.co/400",
      name: "Farhana Rahman",
      content:
        "This water filter has completely changed how we experience drinking water. My entire family loves the clean and fresh taste!",
      rating: 4.5,
    },
    {
      photo: "https://placehold.co/400",
      rating: 5,
      name: "Abdullah Al Mamun",
      content:
        "I am impressed by the quality of the water after using this filter. It feels much healthier and tastes so much better!",
    },

    {
      photo: "https://placehold.co/400",
      rating: 3.5,
      name: "Tanvir Ahmed",
      content:
        "We noticed a huge difference in the water quality immediately. No more bad smells or taste – this filter is excellent!",
    },
  ],
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={classNames("mb-6", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = (
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          );
        else if (rating > i && rating < index + 1)
          content = (
            <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
          );
        else if (index > rating)
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-200 dark:text-opacity-20"
            />
          );

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const TestimonialItem = ({ item }) => {
  const { rating, content, photo, name } = item;
  return (
    <div className="bg-white  shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6">
      <div className="mt-4">
        <Rating rating={rating} showLabel={false} />
        <p className="opacity-50 mb-6 leading-loose">{content}</p>
        <div className="flex items-center">
          <div className="mr-2">
            <img
              src={photo}
              alt={name}
              className="max-w-full h-auto rounded-full border"
              width="47"
            />
          </div>
          <div>
            <h5 className="text-sm font-bold">{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
TestimonialItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };
  return (
    <section className="py-14 md:py-24 bg-white  ">
      <div className="container mx-auto relative px-4">
        <div className="flex justify-between mb-md-4">
          <div className="w-2/3 lg:max-w-lg">
            <h2 className="font-bold text-lg md:text-[45px] leading-none mb-6">
              What Our Clients Say
            </h2>
            <p className="text-sm leading-relaxed">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
            </p>
          </div>
          <div className="w-1/3">
            <div className="flex justify-end items-center relative h-full">
              <button
                className="text-lg bg-white shadow-xl opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
                onClick={() => handleControl("prev")}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button
                className="text-lg bg-white shadow-xl  opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
                onClick={() => handleControl("next")}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-y-6 md:gap-x-6 mt-12">
          {testimonialList[index].map((item, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <TestimonialItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
