import * as React from "react";
import ReactTooltip from "react-tooltip";
import Alert from "react-s-alert";
import "./Grid.css";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/flip.css";

const copyLgtm = (e, { word, url }) => {
  const text = `![${word}](${url})`;
  // テキストエリアを用意する
  const copyFrom = document.createElement("textarea");
  // テキストエリアへ値をセット
  copyFrom.textContent = text;
  // bodyタグの要素を取得
  var bodyElm = document.getElementsByTagName("body")[0];
  // 子要素にテキストエリアを配置
  bodyElm.appendChild(copyFrom);
  // テキストエリアの値を選択
  copyFrom.select();
  // コピーコマンド発行
  document.execCommand("copy");
  // 追加テキストエリアを削除
  bodyElm.removeChild(copyFrom);
  // toast
  Alert.info("クリップボードにコピーしました", {
    position: "top",
    effect: "flip",
    timeout: 1000
  });
};

const Grid = props => {
  const listItems = props.list.map(item => {
    return (
      <li key={item.id} onClick={e => copyLgtm(e, item)}>
        <img
          src={item.url}
          className="cover"
          alt={item.word}
          data-tip
          data-for={String(item.id)}
        />
        <ReactTooltip
          id={String(item.id)}
          place="top"
          type="light"
          effect="float"
        >
          <span>{item.word}</span>
        </ReactTooltip>
      </li>
    );
  });
  return (
    <div>
      <ul className="grid">{listItems}</ul>
    </div>
  );
};

export default Grid;
