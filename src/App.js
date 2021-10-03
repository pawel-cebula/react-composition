import './App.css';

const Card = ({ title, subTitle, children, actions = ['like', 'comment'] }) => (
  <div class="card">
    <div class="card-heading">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
    <div class="card-main">{children}</div>
    <div class="card-actions">
      {actions.map((action) => (
        <button>{action}</button>
      ))}
    </div>
  </div>
);

const PhotoCard = ({ src, alt, children, ...rest }) => (
  <Card {...rest}>
    <img src={src} alt={alt} />
    {children}
  </Card>
);

const TextCard = ({ paragraphs, ...rest }) => (
  <Card {...rest}>
    {paragraphs.map((paragraph) => (
      <p>{paragraph}</p>
    ))}
  </Card>
);

const App = () => {
  const ipaInfo = [
    'India pale ale (IPA) is a hoppy beer style within the broader category of pale ale.',
    'The style of pale ale which became known as India pale ale was widespread in England by 1815, and would grow in popularity, notably as an export beer shipped to India and elsewhere.',
  ];

  return (
    <div className="App">
      <h1>React composition</h1>
      <div class="cards">
        <Card title="Craft beer" subTitle="Most popular styles">
          <ul>
            <li>IPA</li>
            <li>Sour</li>
            <li>Stout</li>
          </ul>
        </Card>
        <PhotoCard
          title="NEIPA"
          subTitle="New England India Pale Ale"
          src="https://www.beercartel.com.au/product_images/uploaded_images/neipa2017-cp.jpg"
          alt="NEIPA photo"
        >
          <p>New England IPAs are beers that are purposely hazy or cloudy.</p>
        </PhotoCard>
        <TextCard
          title="IPA"
          subTitle="India Pale Ale"
          paragraphs={ipaInfo}
          actions={['save']}
        />
      </div>
    </div>
  );
};

export default App;
