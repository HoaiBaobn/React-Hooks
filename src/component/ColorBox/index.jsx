import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function getRandomColor() {
    const color_list = ["pink", "yellow", "green", "black"];
    const randomIndex = Math.trunc(Math.random() * 4);
    return color_list[randomIndex];
}
function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem("box_color") || "deeppink";
        return initColor;
    });

    function handleBoxClick() {
        // get random color gán setColor
        const newcolor = getRandomColor();
        setColor(newcolor);
        localStorage.setItem("box_color", newcolor);
    }
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            Color Box
        </div>
    );
}

export default ColorBox;

//khi click vào div thì xử lí show random ra màu đã chuyền vào
// handleBoxClick xử lí lấy color từ random gán vào 1 biến rồi set setcolor chứa biến random đó
// getrandom có 1 array gôm các màu. dùng hàm Math.trunc để lấy từ 0-4
//rồi return lại biến mới ban đầu = biến random lấy đc ra

// Math.trunc(Math.random() * 4)
//     - Math.trunc dùng để lấy giá trị nguyên
//     - Math.random() dùng để random số thập phân từ 0-1 => Math.random() * 4 = 0 - 0.4.9
// ==> Math.trunc(Math.random() * 4) nhận giá trị từ 0-4
