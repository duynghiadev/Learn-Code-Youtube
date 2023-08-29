## React-memo Hooks

1.  memo() -> Higher Order Component (HOC)
2.  useCallback()
3.  Gồm có 3 loại:

- Hooks
- HOC
- Render Props

## Cách dùng

1.  useEffect(callback) ít dùng

- Gọi callback mỗi khi re-render
- Gọi callback sau khi component thêm element vào DOM

2.  useEffect(callback, [])

- Chỉ gọi 1 lần sau khi component được mounted

3.  useEffect(callback, [deps])

- Callback sẽ được gọi lại mỗi khi deps thay đổi

---

1.  Callback luôn được gọi sau khi component được mounted
2.  Cleanup function luôn được gọi trước khi component được mounted
3.  Cleanup function luôn được gọi trước khi callback được gọi lại (trừ lần mounted)

## Ôn tập React.memo

1. React.memo được gọi là gì ?

[`React.memo được gọi là Higher order component (HOC)`]

[`=> Giải thích: Dùng để ghi nhớ các props của một component, quyết định xem có render lại component đó hay không để tối ưu về hiệu năng. Ngắn gọn React.memo dùng để xử lý component tránh re-render trong tình huống không cần thiết.`]
