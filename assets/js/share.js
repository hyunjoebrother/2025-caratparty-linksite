function shareKakao() {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init("69a870c263ff1f01303766a46942fbb1");
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "2025 캐럿 생일 디제잉파티",
        description: "2025 캐럿 생일 디제잉파티 예약하기",
        imageUrl:
          "https://hyunjoebrother.github.io/2025-caratparty-linksite/og-image.jpg",
        link: {
          mobileWebUrl: "https://x.com/Prof_Boo116",
          webUrl: "https://x.com/Prof_Boo116",
        },
      },
      buttons: [
        {
          title: "2025 캐럿 생일 디제잉파티 같이 가요",
          link: {
            mobileWebUrl: "https://x.com/Prof_Boo116",
            webUrl: "https://x.com/Prof_Boo116",
          },
        },
      ],
    });
  }
}

function shareTwitter() {
  let sendText = "2025 캐럿 생일 디제잉파티 같이 가요";
  let sendUrl = "https://x.com/Prof_Boo116"; // 전달할 URL
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
    handleCopyClipBoard("https://x.com/Prof_Boo116")
  );
});
