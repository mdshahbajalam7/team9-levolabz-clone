export default function Company() {
  const companyimg = [
    {
      src: "https://developers.turing.com/images/companies/pepsi.svg",
    },
    {
      src: "https://developers.turing.com/images/companies/dell.svg",
    },
    {
      src: "https://developers.turing.com/images/companies/jj.svg",
    },
    {
      src: "https://developers.turing.com/images/companies/rivian.svg",
    },
    {
      src: "https://developers.turing.com/images/companies/plum.svg",
    },
    {
      src: "https://developers.turing.com/images/companies/hotstar.svg",
    },
  ];
  return (
    <div className="text-center pt-9 bg-[#f8f8f8]">
      <h1 className="text-4xl font-semibold leading-normal">
        Traditional recruiting is over. Welcome to the Talent Cloud.
      </h1>
      <p className="pt-8">
        Join hundreds of companies trusting Turing for their remote engineering
        needs.
      </p>
      <div className="grid lg:grid-flow-col sm:grid-rows justify-center gap-8 pt-10 ">
        {companyimg.map((item, index) => (
          <div key={index}>
            <img className="w-25" src={item.src} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
}
