install:
	yarn -D

run:
	yarn run dev

deploy:
	yarn run build
	yarn run export
	aws s3 sync out/ s3://tagger.hacknslash.io
