**** Component !== HTML ****

=> Component: JavaScript + HTML = template (html + js) + logic
=> Viết HTML và JavaScript vào trong 1 file lun (VD: file đó có tên là: App.js ) 😆

**** Cách tạo Branch trong GitHub **** 👌👌

git checkout -b dev
git add .
git commit -m "commit"
git push origin dev


**** Muốn chuyển qua Branch khác **** 😎😎

git checkout dev

**** Về lại nhánh Master rồi tạo nhánh mới **** 🤣🤣

B1: git checkout master
B2: git checkout -b project

**** Cách sửa đôi 1 file README.md sau khi đã commit code lên github **** 🤷‍♂️🎉
**** Lưu ý ta sửa đổi file README.md từ 1 nhánh branch khác nha (sửa xong ta update lại vào branch master) !!! **** 🎉🎉
*** Ví dụ sau khi đã commit file README.md lên github rồi mà mình sửa lại file đó. Điều quan trọng là nó sẽ không tạo ra commit mới. Code mình đã sửa nó tự update vào commit trước đó mình tạo luôn ***

B1: git add .
B2: git commit --amend
=> :wq
B3: git push origin dev -f
B4: Vào lại github (vào file mà minh đã sửa code). 
  - Vào mục conversation. 
  - Lướt xuống có chữ Merge pull request (Click vào đó). 
  - Sau đó tiếp tục nhấn thêm Confirm merge
B5: Ta click vào chữ Delete branch để xoá cái branch để cho nó đỡ rác (sạch sẽ code)
B6: Chúng ta về lại vscode (Mình đang mở code trong đó).
  - git checkout master
  - git pull origin master 
B7: Chúng ta xoá cái Branch mà minh vừa tạo ra để update file README.md
  - git branch -D update_readme 
  (update_readme là file mà mình tạo ra để chỉnh sửa file README.md gốc)


***=>> NHỮNG VẤN ĐỀ CẦN TÌM HIỂU ĐỂ ĐI THỰC TẬP <<==*** 😜😜
- tìm hiểu về clean architecture