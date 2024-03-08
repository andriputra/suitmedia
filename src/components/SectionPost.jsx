import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const postData = [
    {
        image: require('../assets/img/post1.png'),
        title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
        category: 'Pet knowledge',
        excerpt: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.'
    },
    {
        image: require('../assets/img/post2.png'),
        title: 'Dog Diet You Need To Know',
        category: 'Pet knowledge',
        excerpt: 'Dividing a dogs diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.'
    },
    {
        image: require('../assets/img/post3.png'),
        title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
        category: 'Pet knowledge',
        excerpt: 'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.'
    }
];

const Post = () => {
    return (
        <section className="post">
            <div className="container">
                <div className="column-title">
                    <div className="column-title-left">
                        <p className="title-up">You already know ?</p>
                        <h4 className="title-bottom">Useful pet knowledge</h4>
                    </div>
                    <div className="column-title-right hidden-xs">
                        <Nav.Link className="btn btn-outline-primary" href="#!">View More <FontAwesomeIcon icon={faChevronRight} /></Nav.Link>
                    </div>
                </div>
                <div className="box-post">
                    {postData.map((post, index) => (
                        <div className="post-product" key={index}>
                            <div className="post-picture">
                                <Image src={post.image} className="img-fluid" alt={post.title} />
                            </div>
                            <div className="post-description">
                                <div className="info">
                                    <span className="label-cat">{post.category}</span>
                                </div>
                                <div className="title"><strong>{post.title}</strong></div>
                                <div className="description">{post.excerpt}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Post;
