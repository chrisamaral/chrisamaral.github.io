import React from 'react'
import bg from '../../img/generic-me.png'
import Page from '../Page'

const articleStyle = {
  backgroundImage: `url(${bg})`
}

const Anchor = props => (
  <a className='link white-90 hover-red ph3' {...props}/>
)

Anchor.displayName = 'Anchor'

const Home = () => (
  <Page>
    <article className='vh-100 dt w-100 tc bg-black white cover' style={articleStyle}>
      <section className='dtc v-mid'>
        <header className='white-50'>
          <h2 className='f7 fw1 ttu tracked mb2 lh-title'>
            since MCMXCI
          </h2>
          <h3 className='f6 fw1 lh-title tracked-mega tracked-ns'>
            a l w a y s&ensp;&ensp;l u r k i n g
          </h3>
        </header>

        <main>
          <h1 className='f1 f-headline-l fw1 lh-title white-60'>
            Christian Amaral
          </h1>

          <blockquote className='f4 i center white-70'>
            &ldquo;technology implies belligerence&rdquo;
          </blockquote>
        </main>

        <footer className='f6 tracked mt5 lh-copy b'>
          <Anchor href='https://github.com/chrisamaral'>code</Anchor>
          <Anchor href='http://last.fm/user/darthcas'>music</Anchor>
          <Anchor href='https://www.goodreads.com/user/show/9615745-christian-amaral'>books</Anchor>
          <br/>
          <Anchor href='http://www.imdb.com/user/ur27305729'>
            cinema
          </Anchor>
          <Anchor href='https://twitter.com/8BbJG69SXP'>
            shame
          </Anchor>
          <Anchor href='https://www.facebook.com/outro.christian'>
            humanity
          </Anchor>
        </footer>
      </section>
    </article>
  </Page>
)

Home.displayName = 'Home'

export default Home
