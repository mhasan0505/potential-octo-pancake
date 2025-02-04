import { MdDiscount, MdDevices, MdPayments } from "react-icons/md";

const BEnefits = () => {


    const benefits = [
        {
          icon: <MdDiscount className="text-4xl text-primary" />,
          title: "Instant Discount",
          description: "10% instant discount with all debit and credit cards"
        },
        {
          icon: <MdDevices className="text-4xl text-primary" />,
          title: "Exchange old device",
          description: "Save upto ৳3,000 by exchanging an old device"
        },
        {
          icon: <MdPayments className="text-4xl text-primary" />,
          title: "No Cost EMIs",
          description: "EMIs upto 6 months for purchases above ৳10,000"
        },
        {
          icon: <MdPayments className="text-4xl text-primary" />,
          title: "Online coupons",
          description: "Get additional online exclusive coupons on login"
        }
      ];

  return (
    <section className="bg-background py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why buy Water Purifiers from Aqua Support BD?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-background-light rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default BEnefits