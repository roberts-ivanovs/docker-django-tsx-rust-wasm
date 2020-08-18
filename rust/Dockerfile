FROM rust:1.45-stretch as builder

# RUN apk add --update curl
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
RUN cargo install cargo-watch
WORKDIR /srv/app/rust
COPY . ./

CMD ["cargo", "watch", "-i", ".gitignore", "-i", '"pkg/*"', "-s", '"wasm-pack build"']
