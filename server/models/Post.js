import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    description: String,
    imageUrl: String,
    userImageUrl: String,
    likes: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Array,
        default: [],
    },
}, { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;