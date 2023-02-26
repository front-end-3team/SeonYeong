import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
    /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

    // const [onPlusSong, setOnPlusSong] = useState(false);

    const [musicList, setMusicList] = useState(PlayListMock.playlist);
    const [addList, setAddList] = useState({
        title: "",
        singer: "",
    });

    const { title, singer } = addList;
    // 인풋 값
    const onAddSong = (e) => {
        const { name, value } = e.target;
        setAddList({
            ...addList,
            [name]: value,
        });
    };

    // 추가버튼
    const onAddSongList = () => {
        const list = {
            title,
            signer: singer,
        };

        setMusicList([...musicList, list]);

        setAddList({
            title: "",
            singer: "",
        });
    };
    console.log(musicList);

    // 삭제버튼
    const removeBtn = (title) => {
        setMusicList(musicList.filter((el) => el.title !== title));
    };

    return (
        <>
            <ul>
                {musicList.map((e) => (
                    <li>
                        <h3>{e.title}</h3>
                        <p>{e.signer}</p>
                        <button onClick={() => removeBtn(e.title)}>삭제</button>
                        <hr />
                    </li>
                ))}
            </ul>
            <div>
                <p>
                    곡명 : <input name="title" value={title} onChange={onAddSong} />
                </p>
                <p>
                    가수/작곡 : <input name="singer" value={singer} onChange={onAddSong} />
                </p>
                <p>
                    <button onClick={onAddSongList}>추가</button>
                </p>
            </div>
        </>
    );
}
export default State1;
