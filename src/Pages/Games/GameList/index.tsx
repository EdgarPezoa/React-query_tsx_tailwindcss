import React, { FunctionComponent, useState } from "react";
import GameCard from "../../../Components/GameCard";
import { useQuery } from "react-query";
import { gameList } from "../../../api";

type GameListProps = {};
const GameList: FunctionComponent<GameListProps> = (props) => {
    const { isLoading, isError, error, isIdle, data } = useQuery(
        "gameList",
        gameList
    );
    const [search, setSearch] = useState("");

    const renderGameCards = () => {
        return data.data.map((game) => {
            if (
                search === "" ||
                game.title.toLocaleLowerCase().startsWith(search)
            ) {
                return (
                    <div
                        className="flex justify-center bg-gray-100 m-4"
                        key={game.id}
                    >
                        <GameCard
                            title={game.title}
                            image={game.image}
                            company={game.company}
                            platforms={game.platforms}
                        />
                    </div>
                );
            } else {
                return null;
            }
        });
    };

    if (isLoading) {
        return <p>Is loading...</p>;
    }

    if (isError) {
        return <p>Is {error}, reload</p>;
    }

    if (isIdle) {
        return <p>Is loading...</p>;
    }

    return (
        <div className="m-4">
            <h1 className="text-6xl text-center py-3">Game List~</h1>
            
            {/* Search bar */}
            <div className="flex justify-center items-center bg-gray-100 m-4 space-x-8 p-4">
                <label className="text-lg italic font-bold" htmlFor="gameTitle">
                    Search for a game
                </label>
                <input
                    value={search}
                    className="w-1/4 rounded-md focus:outline-none focus:ring-2 focus:border-blue-300 text-sm text-black placeholder-gray-500 border border-gray-200 py-2 pl-3"
                    placeholder="Game's Title"
                    type="text"
                    name="gameTitle"
                    id="gameTitle"
                    onChange={(event) =>
                        setSearch(event.target.value.toLowerCase())
                    }
                />
            </div>

            {/* Games Cards */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2">{renderGameCards()}</div>
        </div>
    );
};

export default GameList;
