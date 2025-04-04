import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
    title: 'Welcome to ShopExpress',
    description: 'Top-quality products at unbeatable prices!',
    keywords: 'electronics, best deals, affordable gadgets, online shopping',
  };
  

export default Meta;