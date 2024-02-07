import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./Button";
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

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onTextChange(tweet);
        setTweet(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(tweet);
        setTweet('');
    };

    return (
        <div className="w-full flex flex-row px-4 py-1">
            <div className="mr-3.5">
                <AvatarLink href={href} imgSrc={imgSrc} alt={alt} size="small" />
            </div>
            <form onSubmit={handleSubmit}>
                <textarea 
                    className="bg-transparent text-[#d9d9d9] text-xl min-w-80 w-96 min-h-14"
                    rows={2}
                    cols={33}
                    placeholder="What's happening?"
                    value={tweet}
                    onChange={handleTextChange}
                    maxLength={218}
                />
                <div className="flex flex-row">
                    <div className="basis-3/4">
                        Other Media Buttons Placeholder
                    </div>
                    <div className="basis-1/4">
                        <Button type="submit" size="medium" disabled={tweet.length === 0}>
                            Tweet
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};
