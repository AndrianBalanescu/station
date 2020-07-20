import React from 'react'
import c from 'classnames'
import { ContractUI } from '@terra-money/use-station'
import { useApp } from '../../hooks'
import ButtonWithAuth from '../../components/ButtonWithAuth'
import ActionBar from '../../components/ActionBar'
import Card from '../../components/Card'
import Flex from '../../components/Flex'
import Icon from '../../components/Icon'
import Interact from '../../post/Interact'
import Query from '../../post/Query'
import s from '../txs/Tx.module.scss'

const Contract = ({ address, date, ...props }: ContractUI) => {
  const { contract, code, interact, query } = props
  const { modal } = useApp()

  const title = (
    <>
      <span className={s.address}>{address}</span>
      <section className={s.date}>
        <Icon name="date_range" />
        {date}
      </section>
    </>
  )

  return (
    <Card title={title} {...classNames} bordered>
      <Flex className="space-between">
        <dl className={c('dl-wrap', s.dl)}>
          <dt>{code.label}</dt>
          <dd>{code.value}</dd>
          <dt>{contract.label}</dt>
          <dd>{contract.value}</dd>
        </dl>

        <ActionBar
          list={[
            <ButtonWithAuth
              className="btn btn-outline-primary btn-sm"
              onClick={() => modal.open(<Interact address={address} />)}
            >
              {interact}
            </ButtonWithAuth>,
            <ButtonWithAuth
              className="btn btn-outline-sky btn-sm"
              onClick={() => modal.open(<Query address={address} />)}
            >
              {query}
            </ButtonWithAuth>,
          ]}
        />
      </Flex>
    </Card>
  )
}

export default Contract

/* styles */
const classNames = {
  headerClassName: s.header,
  bodyClassName: s.body,
}
