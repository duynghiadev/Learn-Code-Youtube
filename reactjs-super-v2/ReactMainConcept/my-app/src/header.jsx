const lastName = 'Nghia'

const sum = (a, b) => a + b

const element = (
  <h1>
    hello, world! I'am {lastName}. I'm {sum(10, 12)}
  </h1>
)

// Tên thuộc tính phải chuyển thành camelCase
const element2 = (
  <a href='google.com' tabIndex='11' className='123' id='the-a'>
    Google
  </a>
)

const element3 = <h3 />

const element4 = <img src='' alt='' />

const element5 = <input type='text' />

const comment = `<script>console.log('send token')</script>`

const element6 = <h1 className='greeting'>Hello, world!</h1>

// Babel compiler
const element6_1 = React.createElement('h1', { className: 'greeting' }, 'Hello, world!')

// React will return object for they, that it is (which return similiar):
const element6_2 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
}
