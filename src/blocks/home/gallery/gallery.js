import mixitup from 'mixitup';

export default function mixitUp() {
    const mixer = mixitup('.gallery__inner',{
        load: {
            filter: '.living'
        }
    });
}