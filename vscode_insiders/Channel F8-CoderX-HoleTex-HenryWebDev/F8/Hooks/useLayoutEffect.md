## useEffect Hooks

1. Cập nhật lại state
2. Cập nhật DOM (munated)
3. Render lại UI
4. Gọi Cleanup nếu dép thay đổi
5. Gọi useEffect callback

## useLayoutEffect Hooks

1. Cập nhật lại state
2. Cập nhật DOM (munated)
3. Gọi cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback (sync)
5. Render lại UI

## Ôn tâp useLayoutEffect Hook

1. Đâu là thứ tự thực hiện công việc của useLayoutEffect?

[` Cập nhật lại state - Cập nhật DOM (munated) - Gọi cleanup nếu dependency thay đổi (sync) - Gọi useEffect callback (sync) - Render lại UI `]

[`=> Giải thích: useLayoutEffect sẽ gọi lại callback và hàm cleanup nếu dependency thay đổi sau đó mới render lại UI`]
