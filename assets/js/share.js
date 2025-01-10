function shareKakao() {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init("749ac3158ec581b70640aab383151bec");
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "SnapshootPDF - 스냅슛PDF",
        description: "쉽고, 편하고, 한번에 PDF 증거자료를 수집하세요",
        imageUrl: "https://snapshoot.pics/og-image.png",
        link: {
          mobileWebUrl: "https://snapshoot.pics/",
          webUrl: "https://snapshoot.pics/",
        },
      },
      buttons: [
        {
          title: "SnapshootPDF 📸",
          link: {
            mobileWebUrl: "https://snapshoot.pics/",
            webUrl: "https://snapshoot.pics/",
          },
        },
      ],
    });
  }
}

function shareTwitter() {
  let sendText = "📸 쉽고, 편하고, 한번에 PDF 증거자료를 수집하세요.";
  let sendUrl = "https://snapshoot.pics/"; // 전달할 URL
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
}

function handleCopyClipBoard(text) {
  try {
    navigator.clipboard.writeText(text).then((res) => {
      alert("링크 복사 완료!");
    });
  } catch (error) {
    alert("복사 실패!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const shareCard = document.getElementById("share-card");

  const kakaoButton = shareCard.querySelector(".kakao-button");
  kakaoButton.addEventListener("click", shareKakao);

  const twitterButton = shareCard.querySelector(".twitter-button");
  twitterButton.addEventListener("click", shareTwitter);

  const clipButton = shareCard.querySelector(".clip-button");
  clipButton.addEventListener("click", () =>
    handleCopyClipBoard("https://snapshoot.pics/")
  );
});
