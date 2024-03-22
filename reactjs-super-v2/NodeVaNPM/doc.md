# Webpack

## Webpack là gì?

- Webpack là một tool chạy trên môi trường NodeJs giúp chúng ta đóng gói các file js, css, sass, jpg...Ngoài ra webpack còn giúp chúng ta tạo một server ảo để thuận tiện cho việc code.

## Cài `webpack` và `webpack-cli`

- Chúng ta cài vào trong devDependencies vì tool này chỉ chạy trong lúc chúng ta dev
- `webpack-cli` có 2 chế độ cài là **global** và **local**. Mình khuyên các bạn cài **local** cho dễ quản lý.
- Chạy câu lệnh `yarn add webpack webpack-cli -D` để cài
- Mở file `package.json` lên để thêm dòng `"build": "webpack"` vào trong `script`
- Mặc định thì `webpack` sẽ sử dụng thư mục `dist` để chứa những file sau khi build và sử dụng `src/index.js` để chứa file **entry** (file đầu vào tổng) của dự án. Muốn custom thư mục khác hoặc cấu hình sâu hơn thì phải tạo file config là `webpack.config.js`.
- Webpack sẽ tự nhận diện file `webpack.config.js` và lấy những config trong đó. Nếu bạn tạo tên file khác `webpack.config.js` thì phải khai báo nó trong đoạn `script` của `package.json` để webpack biết.

**`webpack.config.js`**

```js
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  }
}
```

## Sử dụng các Loaders và biên dịch SASS

- Nếu muốn dùng css trong webpack thì bạn phải cài `style-loader` và `css-loader`
- Chạy câu lệnh `yarn add style-loader css-loader -D` để cài
- Muốn dùng thêm sass thì phải cài thêm `sass` và `sass-loader`
- Chạy câu lệnh `yarn add sass sass-loader -D` để cài
- Sau khi build và chạy thì chúng ta sẽ thấy thẻ `<style>` được Javascript thao tác DOM vào trong file `index.html`. Nếu các bạn muốn file css nằm riêng biệt thì xem ở bước tiếp theo nhé.

**`webpack.config.js`**

```js
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
```

## Sử dụng HTML Webpack Plugin để tự động tạo ra file HTML

- Bây giờ có 1 vấn đề là chúng ta đang chỉnh sửa các đường dẫn css và js bằng tay trong file `index.html`. Điều này không hay chút nào vì sau này các tên file sẽ là các hash name thì việc cập nhật lại file `index.html` khá mất thời gian.
- `html-webpack-plugin` sẽ giúp chúng ta tự tạo ra 1 file html bằng webpack theo cấu hình của chúng ta.
- Chạy câu lệnh `yarn add html-webpack-plugin -D` để cài

**`webpack.config.js`**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}
```

## Tách CSS ra những file riêng

### Vấn đề khi chèn `style` bằng JS

- Vấn đề hiện tại là CSS đang được JS DOM vào nên xảy ra tình trạng "chớp trắng" khi mới load trang.
- Tăng size file JS lên rất nhiều

### Cách fix

- Dùng `mini-css-extract-plugin` để tách nó ra thành những file riêng
- Chạy câu lệnh `yarn add mini-css-extract-plugin -D` để cài

### Lưu ý

- Hãy đảm bảo bạn đã cài và đang dùng plugin `html-webpack-plugin`, vì nó cần plugin này để tự động generate ra thẻ `<link>` trong file `index.html`
- Không dùng plugin `style-loader` cùng với `mini-css-extract-plugin`. Nếu đang dùng `style-loader` thì xóa nó đi, 2 thằng này xung đột với nhau

**`webpack.config.js`**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}
```

## Xử lý caching ở trình duyệt bằng hash name file

- Hiện tại những file css hay js sau khi build đều có 1 cái tên cố định, điều này dẫn đến trình duyệt hoặc server sẽ thực hiện caching. Caching là tốt, điều này giúp cho web chúng ta load nhanh hơn nhưng nó không đúng với ngữ cảnh hiện tại. Chúng ta thường build lại webpack khi có một cập nhật mới gì đó trên website và chúng ta muốn người dùng sẽ thấy ngay lập tức bản cập nhật này. Vì thế chúng ta cần phải xử lý caching.
- Cách xử lý dễ nhất là mỗi lần build webpack chúng ta lại tạo ra một tên file mới. Webpack cho phép chúng ta chỉnh sửa điều này trong `output.filename` bằng `[contenthash]`

**`webpack.config.js`**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}
```

## Tạo một server bằng webpack để dev

- Hiện tại chúng ta đang dùng Live Server trên VS code để tự động reload lại trang web. Webpack cung cấp sẵn cho chúng ta tính năng tạo một server localhost không cần dùng đến extension VS code.
- Để sử dụng thì chúng ta cài `webpack-dev-server`: `yarn add webpack-dev-server -D`
- Thêm script sau vào `package.json`: `"start": "webpack serve"`

### Lưu ý

- `webpack-dev-server` cần `html-webpack-plugin` để hoạt động được.
- `webpack-dev-server` sẽ lưu các tạm các file của bạn vào RAM, vì thế bạn sẽ không thấy chúng ở trong thư mục build (`dist`). Không tin thì các bạn có thể xóa thử thư mục `dist` thì server vẫn hoạt động bình thường.

**`webpack.config.js`**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ],
  devServer: {
    static: {
      directory: 'dist' // Đường dẫn tương đối đến với thư mục chứa index.html
    },
    port: 3000, // Port thay cho port mặc định (8080)
    open: true, // Mở trang webpack khi chạy terminal
    hot: true, // Bật tính năng reload nhanh Hot Module Replacement
    compress: true, // Bật Gzip cho các tài nguyên
    historyApiFallback: true // Set true nếu bạn dùng cho các SPA và sử dụng History API của HTML5
  }
}
```

## Dọn dẹp thư mục build

- Thêm `output.clean = true` để dọn dẹp thư mục `dist` sau mỗi lần build.

## Source map

- Thêm `devtool: 'source-map'` để có `source-map` đầy đủ tiện lợi cho môi trường dev.
- `source-map` sẽ làm chậm tiến trình build và rebuild.
- Ngoài `source-map` ra thì còn có các giá trị khác như `eval`, `eval-cheap-source-map`,...tùy thuộc vào mục đích sử dụng.
- **Khuyên dùng**: Chỉ nên để `source-map` khi dev, khi build ra production thì hãy disable nó đi vì `source-map` sẽ làm lộ mã nguồn gốc cũng như là tăng kích thước các file build.
- Webpack nhận các biến môi trường thông qua `--env` trong câu lệnh script khi chạy webpack. Vì thế bạn hãy thêm `"start": "webpack serve --env development"` trong script của `package.json` để truyền `development = true` vào webpack. `module.exports` ở file `webpack.config.js` ngoài bằng một object thì nó còn có thể là một function với tham số là biến object môi trườn env.

**`webpack.config.js`**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const isDevelopment = Boolean(env.development)
  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: {
      app: path.resolve('src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    devtool: isDevelopment ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.s[ac]ss|css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html',
        template: 'src/template.html'
      })
    ],
    devServer: {
      static: {
        directory: 'dist' // Đường dẫn tương đối đến với thư mục chứa index.html
      },
      port: 3000, // Port thay cho port mặc định
      open: true, // Mở trang webpack khi chạy terminal
      hot: true, // Bật tính năng reload nhanh Hot Module Replacement
      compress: true, // Bật Gzip cho các tài nguyên
      historyApiFallback: true // Set true nếu bạn dùng cho các SPA và sử dụng History API của HTML5
    }
  }
}
```

## Dùng Babel để tạo biên dịch code JS thành các phiên bản cũ hơn

## Sử dụng các tài nguyên như ảnh trong webpack

## Phân tích file build với Webpack Bundle Analyzer
