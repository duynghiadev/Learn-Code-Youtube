import Head from 'next/head'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  // map data to an array of path objects with params (id)
  const paths = data.map((coder) => {
    return {
      params: {
        id: coder.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

  return {
    props: {
      coder: data
    }
  }
}

export default function Detail({ coder }) {
  return (
    <>
      <Head>
        <title>Coder Wikipedia | {coder.name}</title>
        <meta name='keywords' content='coders' />
      </Head>

      <div>
        <h1>{coder.name}</h1>
        <p>Email: {coder.email}</p>
        <p>Website: {coder.website}</p>
        <p>
          Address: {coder.address.street}, {coder.address.city}
        </p>
        <p>Company: {coder.company.name}</p>
      </div>
    </>
  )
}
