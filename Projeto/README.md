# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<Suspense fallback="✨ Personalizing...">
  <Personalization expression="user's persona is 'developer'">
    {(isDeveloper: boolean) =>
      isDeveloper ? (
        <a href="/share"> Compartilhe com seu desenvolvedor </a>
      ) : (
        <a href="/share"> Compartilhe com seu desenvolvedor </a>
      )
    }
  </Personalization>
</Suspense>

<Suspense fallback="✨ Personalizing...">
  <Personalization expression="user's persona is 'marketer'">
    {(isMarketer: boolean) => (
      <>{isMarketer && <button>Criar novo anuncio</button>}</>
    )}
  </Personalization>
</Suspense>

<Suspense fallback="✨ Personalizing content...">
  <Slot id="home-banner">
    {({ title, subtitle, cta }: HomeBanner) => (
      <div>
        <strong>{title}</strong>
        <p>{subtitle}</p>
        <a href={cta.link}>{cta.label}</a>
      </div>
    )}
  </Slot>
</Suspense>

<Suspense fallback="✨ Personalizing...">
  <Personalization expression="user's persona is 'growth-hacker'">
    {(isGrowthHacker: boolean) =>
      isGrowthHacker ? (
        <Suspense fallback="✨ Personalizing content...">
          <Slot id="home-banner">
            {({ title, subtitle, cta }: HomeBanner) => (
              <div>
                <strong>{title}</strong>
                <p>{subtitle}</p>
                <a href={cta.link}>{cta.label}</a>
              </div>
            )}
          </Slot>
        </Suspense>
      ) : (
        <a href="/share"> Compartilhe com seu desenvolvedor </a>
      )
    }
  </Personalization>
</Suspense>

<nav className="nav-bar">
  <a href="https://croct.com" className="logo">
    <img src={logo} title="Croct" alt="Croct" />
  </a>
</nav>

<div className="content">
  <h1>Qual sua função entre Developer, Marketer ou Growth Hacker?</h1>
  <h2>Selecione uma delas para ter maiores informações.</h2>
</div>

<Suspense fallback="✨ Personalizing content...">
  <Slot id="home-banner">
    {({ title, subtitle, cta }: HomeBanner) => (
      <div>
        <strong>{title}</strong>
        <p>{subtitle}</p>
        <a href={cta.link}>{cta.label}</a>
      </div>
    )}
  </Slot>
</Suspense>

<div>
  <h1>
    You can Hack many Web Sites programming features that let you manipulate
    the sistems
  </h1>

  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

  <img
    className="hacker"
    src={hackerImg}
    alt="Imagem de um hacker com capuz"
  />

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aut ipsa
    eligendi. Asperiores, autem quia vitae commodi ipsam sint necessitatibus
    molestiae aperiam doloribus error assumenda eligendi, incidunt tempore
    quaerat minima?
  </p>

  <Link to="/">
    <button className="backHome">Voltar para Home</button>
  </Link>
</div>