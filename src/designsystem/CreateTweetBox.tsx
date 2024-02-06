import { useState } from "react";
import { Button } from "./Button";
import clsx from "clsx";
import { AvatarLink, AvatarLinkProps } from "./AvatarLink";

interface CreateTweetBoxProps extends AvatarLinkProps {
    onTextChange: (tweet: string) => void;
    onSubmit: (tweet: string) => void;
};

export const CreateTweetBox = ({
    onTextChange,
    onSubmit,
    href,
    imgSrc,
    alt,
}: CreateTweetBoxProps) => {
    const [tweet, setTweet] = useState('');

    const handleTextChange = (e: any) => {
        console.log('changed!', tweet);
        onTextChange(tweet);
        setTweet(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('submit!', tweet);
        onSubmit(tweet);
        setTweet('');
    };

    const createTweetBoxClass = clsx(
        "w-full flex flex-row px-4 py-1"
    );

    const avatarClass = clsx(
        "mr-3.5"
    );

    const textAreaClass = clsx(
        "bg-transparent text-[#d9d9d9] text-xl min-w-80 w-96 min-h-14"
    );

    const buttonsRowClass = clsx(
        "flex flex-row"
    );

    const mediaButtonsClass = clsx(
        "basis-3/4"
    );

    const tweetButtonClass = clsx(
        "basis-1/4"
    );

    return (
        <div className={createTweetBoxClass}>
            <div className={avatarClass}>
                <AvatarLink href={href} imgSrc={imgSrc} alt={alt} size="small" />
            </div>
            <form onSubmit={handleSubmit}>
                <textarea 
                    className={textAreaClass}
                    rows={2}
                    cols={33}
                    placeholder="What's happening?"
                    value={tweet}
                    onChange={handleTextChange}
                    maxLength={218}
                />
                <div className={buttonsRowClass}>
                    <div className={mediaButtonsClass}>Test Other Buttons</div>
                    <div className={tweetButtonClass}>
                        <Button type="submit" size="medium" disabled={tweet.length === 0}>Tweet</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};