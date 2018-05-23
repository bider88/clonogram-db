'use strict'

import test from 'ava'
import utils from '../lib/utils'

test('extracting hashtags from text', t => {
  let tags = utils.extractTags('a #picture with tags #AwEsOmE #Coco #AVA and #100 ##yes')

  t.deepEqual(tags, [
    'picture',
    'awesome',
    'coco',
    'ava',
    '100',
    'yes'
  ])

  tags = utils.extractTags('a pictures with no tags')
  t.deepEqual(tags, [])

  tags = utils.extractTags()
  t.deepEqual(tags, [])

  tags = utils.extractTags(null)
  t.deepEqual(tags, [])
})
