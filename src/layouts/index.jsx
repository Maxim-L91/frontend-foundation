import '@/styles'
import { Head } from 'minista/head'
import Content from '@/layouts/Content'
import Header from '@/layouts/Header'

export default (props) => {
  const { title, children, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>{`Start ${title}`}</title>
        <script src="/src/main.js" type="module" />
      </Head>
      <Header url={url} />
      <Content>{children}</Content>
    </>
  )
}
