import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";

type GameCardProps = {
    title: string;
    image: string;
    company: string;
    platforms: string[];
};
const GameCard: FunctionComponent<GameCardProps> = (props) => {
    const { title, image, company, platforms } = props;

    const renderPlatforms = () => {
        return (
            <ul className="flex space-x-2 items-center pt-3">
                <li>Platforms:</li>
                {platforms.map((platformNew, index) => {
                    return <li className="border rounded-full px-2 py-1 text-center border-purple-400 hover:border-purple-600 hover:ring-2" key={index}>{platformNew}</li>;
                })}
            </ul>
        );
    };

    return (
        <div className="w-full h-full border-2 border-gray-200 rounded-lg border-opacity-75 shadow-md">
            <div className="">
                <h1 className="text-center p-3 text-lg font-semibold">
                    {title}
                </h1>
            </div>
            <div className="">
                <img className="min-w-full h-auto" src={image} alt={title} />
            </div>
            <div className="m-4">
                <p>Company: <span className="italic text-lg ml-1">{company}</span></p>
                {renderPlatforms()}
            </div>
        </div>
    );
};

GameCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    platforms: PropTypes.array.isRequired,
};

export default GameCard;
