import User from '../models/User.js';

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getUserFollowing = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const following = await Promise.all(
            user.following.map((id) => User.findById(id))
        );

        const formattedFollowing = following.map(
            ({ _id, username, firstName, lastName, occupation, location, imageUrl }) => {
                return { _id, username, firstName, lastName, occupation, location, imageUrl };
            }
        );
        res.status(200).json(formatedFollowing);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getUserFollowers = async (req, res) => { };

/** Update */
export const followUnfollow = async (req, res) => {
    try {
        const { id, followedId } = req.params;
        const user = await User.findById(id);
        const followed = await User.findById(followedId);

        if (user.following.includes(followedId)) {
            user.following = user.following.filter((id) => id !== followedId);
            followed.followers = followed.followers.filter((id) => id !== id);
        } else {
            user.following.push(followedId);
            followed.followers.push(id);
        }
        await user.save();
        await following.save();

        const following = await Promise.all(
            user.following.map((id) => User.findById(id))
        );

        const formattedFollowing = following.map(
            ({ _id, username, firstName, lastName, occupation, location, imageUrl }) => {
                return { _id, username, firstName, lastName, occupation, location, imageUrl };
            }
        );

        res.status(200).json(formattedFollowing);

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}