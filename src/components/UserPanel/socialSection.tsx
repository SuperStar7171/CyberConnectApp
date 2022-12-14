import { GET_SOCIAL } from "@/graphql/queries/get_social";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

interface Props {
    address: string;
}

export const SocialSection = ({ address }: Props) => {
    const [socialData, setsocialData] = useState<any>([]);

    const { data, refetch } = useQuery(GET_SOCIAL, {
        variables: {
            address: address,
        },
    });

    useEffect(() => {
        refetch();
        if (data) {
            setsocialData(data);
        }
    }, [data, refetch]);

    return (
        <>
            {socialData.identity && (
                <div className={styles.socialSection}>
                    {socialData.identity.twitter.verified == true && (
                        <>
                            <div className={styles.twitter}>
                                <div className={styles.twitterImageDiv}>
                                    <img
                                        src={"/twitter.png"}
                                        alt={""}
                                        className={styles.twitterImage}
                                    />
                                    <img
                                        src={
                                            "/carbon_overflow-menu-vertical.png"
                                        }
                                        alt={""}
                                        className={styles.twitterImage}
                                    />
                                </div>
                                <div className={styles.twitterPDiv}>
                                    <p>Twitter</p>
                                    <a
                                        href={
                                            "https://twitter.com/" +
                                            socialData.identity.handle
                                        }
                                    >
                                        {"@" +
                                            socialData.identity.twitter.handle}
                                    </a>
                                </div>
                                <div className={styles.verifyDiv}>
                                    <img
                                        src={"/veirify_icon.png"}
                                        alt={""}
                                        className={styles.twitterImage}
                                    />
                                    <p className={styles.verifiedP}>Verified</p>
                                </div>
                            </div>
                            <div className={styles.github}>
                                <div className={styles.twitterImageDiv}>
                                    <img
                                        src={"/github_icon.png"}
                                        alt={""}
                                        className={styles.twitterImage}
                                    />
                                    <img
                                        src={
                                            "/carbon_overflow-menu-vertical.png"
                                        }
                                        alt={""}
                                        className={styles.twitterImage}
                                    />
                                </div>
                                <div className={styles.twitterPDiv}>
                                    <p>Github</p>
                                    <a href={"https://Github.com"}>
                                        Connect to Github
                                    </a>
                                </div>
                            </div>
                        </>
                    )}

                    {socialData.identity.github.username && (
                        <div className={styles.github}>
                            <div className={styles.twitterImageDiv}>
                                <img
                                    src={"/github_icon.png"}
                                    alt={""}
                                    className={styles.twitterImage}
                                />
                                <img
                                    src={"/carbon_overflow-menu-vertical.png"}
                                    alt={""}
                                    className={styles.twitterImage}
                                />
                            </div>
                            <div className={styles.twitterPDiv}>
                                <p>Github</p>
                                <a
                                    href={
                                        "https://github.com/" +
                                        socialData.identity.github.username
                                    }
                                >
                                    {"@" + socialData.identity.github.username}
                                </a>
                            </div>
                            <div className={styles.verifyDiv}>
                                <img
                                    src={"/veirify_icon.png"}
                                    alt={""}
                                    className={styles.twitterImage}
                                />
                                <p className={styles.verifiedP}>Verified</p>
                            </div>
                        </div>
                    )}
                    {socialData.identity.twitter.verified == false &&
                        !socialData.identity.github.username && (
                            <div className={styles.noNftsInSection}>
                                <p>No Accounts</p>
                            </div>
                        )}
                </div>
            )}
        </>
    );
};
