//删除点赞通知
const test = async () => {
    let scrollHeight = 2000
    for(let i = 0;i < 100; i++) {
        await sleep(200)
        document.querySelector(".space-right-bottom").scrollTo(0,scrollHeight)
        scrollHeight += scrollHeight
    }
    const deleteButtonList = document.querySelectorAll(".love-item > .basic-list-item > .center-box > .line-3 > .action-field > .action-button:nth-child(1)")
    deleteButtonList.forEach(item => {
        item.click();
        document.querySelector(".popup-btn-ctnr.t-center > .bl-button:nth-child(1)").click()
    })
}

const sleep = (time = 200) => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, time);
      });
}